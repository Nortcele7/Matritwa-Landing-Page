import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';

export async function GET(req: NextRequest) {
  try {
    let data: any[] = [];

    // Read real survey data from Excel file
    const filePath = path.join(process.cwd(), 'public', 'Matritwa.xlsx');
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const realData = XLSX.utils.sheet_to_json(worksheet);
      data = [...realData];
    }

    // Generate insights from real data only
    const insights = generateInsights(data);

    return NextResponse.json(insights, { status: 200 });
  } catch (error: any) {
    console.error('Survey insights error:', error);
    return NextResponse.json({ error: 'Failed to process survey data' }, { status: 500 });
  }
}



interface QuestionData {
  question: string;
  answers: Array<{ answer: string; count: number }>;
  type: 'single' | 'multiple' | 'text';
}

interface Insight {
  text: string;
  percentage: number;
  icon: string;
}

function calculatePercentageInsights(data: any[]): Insight[] {
  if (!data || data.length === 0) return [];
  
  const totalResponses = data.length;
  const insights: Insight[] = [];

  // Analyze all columns to find yes/no or positive/negative questions
  const columns = Object.keys(data[0] || {});

  columns.forEach((column) => {
    // Skip metadata and PII columns
    const skipFields = ['Timestamp', 'timestamp', 'Date', 'date', 'Email', 'email', 'Phone', 'phone', 'Name', 'name', 'Contact', 'Id'];
    if (skipFields.some(skip => column.toLowerCase().includes(skip.toLowerCase()))) {
      return;
    }

    const answers: { [key: string]: number } = {};
    let totalAnswers = 0;

    // Count all answers for this column
    data.forEach((row: any) => {
      const value = String(row[column] || '').trim();
      if (value && value !== '') {
        const items = value.split(',').map(s => s.trim());
        items.forEach(item => {
          if (item) {
            answers[item] = (answers[item] || 0) + 1;
            totalAnswers++;
          }
        });
      }
    });

    // Look for yes/no questions or binary answers
    const yesKeywords = ['yes', 'true', 'interested', 'useful', 'helpful', 'necessary', 'important', 'essential', 'agree', 'would use'];
    const noKeywords = ['no', 'false', 'not interested', 'not useful'];

    let positiveCount = 0;
    Object.entries(answers).forEach(([answer, count]) => {
      const lowerAnswer = answer.toLowerCase();
      if (yesKeywords.some(keyword => lowerAnswer.includes(keyword))) {
        positiveCount += count;
      }
    });

    // Only create insight if we have meaningful yes/no data (at least 30% either way)
    if (totalAnswers > 0 && positiveCount > 0) {
      const percentage = Math.round((positiveCount / totalAnswers) * 100);
      
      // Only include if percentage is between 25% and 95% (realistic range)
      if (percentage >= 25 && percentage <= 95) {
        const text = generateInsightText(column, percentage);
        const icon = getIconForColumn(column);

        if (text) {
          insights.push({ text, percentage, icon });
        }
      }
    }
  });

  // Sort by percentage (highest first) and return top 8
  return insights.sort((a, b) => b.percentage - a.percentage).slice(0, 8);
}

function generateInsightText(column: string, percentage: number): string {
  const cleanColumn = column.replace(/[_-]/g, ' ').toLowerCase();

  // General templates
  const templates = [
    `${percentage}% of mothers think ${cleanColumn} is important`,
    `${percentage}% are interested in ${cleanColumn}`,
    `${percentage}% value ${cleanColumn}`,
    `${percentage}% believe ${cleanColumn} is useful`,
    `${percentage}% want access to ${cleanColumn}`,
  ];

  // Specific column mappings
  if (cleanColumn.includes('matritwa')) {
    return `${percentage}% think Matritwa is necessary for today's mothers`;
  }
  if (cleanColumn.includes('ai') || cleanColumn.includes('assistant') || cleanColumn.includes('chatbot')) {
    return `${percentage}% believe AI assistance is useful in maternity care`;
  }
  if (cleanColumn.includes('market') || cleanColumn.includes('buy') || cleanColumn.includes('sell')) {
    return `${percentage}% interested in buying and selling baby items`;
  }
  if (cleanColumn.includes('health') || cleanColumn.includes('guidance') || cleanColumn.includes('wellness')) {
    return `${percentage}% value health and wellness guidance`;
  }
  if (cleanColumn.includes('community') || cleanColumn.includes('support') || cleanColumn.includes('group')) {
    return `${percentage}% want community support groups`;
  }
  if (cleanColumn.includes('vaccine')) {
    return `${percentage}% think vaccine tracking is important`;
  }
  if (cleanColumn.includes('product') || cleanColumn.includes('safe')) {
    return `${percentage}% prioritize product safety`;
  }
  if (cleanColumn.includes('mentor') || cleanColumn.includes('expert') || cleanColumn.includes('advice')) {
    return `${percentage}% want expert mentorship and advice`;
  }
  if (cleanColumn.includes('share') || cleanColumn.includes('resell') || cleanColumn.includes('swap')) {
    return `${percentage}% want to share or swap baby items`;
  }
  if (cleanColumn.includes('nursery') || cleanColumn.includes('lullaby') || cleanColumn.includes('rhyme')) {
    return `${percentage}% interested in nursery rhymes and lullabies`;
  }
  if (cleanColumn.includes('multilingual') || cleanColumn.includes('language')) {
    return `${percentage}% want multilingual support`;
  }

  // Default template
  return `${percentage}% of mothers value ${cleanColumn}`;
}

function getIconForColumn(column: string): string {
  const cleanColumn = column.toLowerCase();

  if (cleanColumn.includes('matritwa')) return '💝';
  if (cleanColumn.includes('ai') || cleanColumn.includes('assistant') || cleanColumn.includes('chatbot')) return '🤖';
  if (cleanColumn.includes('market') || cleanColumn.includes('buy') || cleanColumn.includes('sell')) return '🛍️';
  if (cleanColumn.includes('health') || cleanColumn.includes('guidance') || cleanColumn.includes('wellness')) return '🏥';
  if (cleanColumn.includes('community') || cleanColumn.includes('support') || cleanColumn.includes('group')) return '👥';
  if (cleanColumn.includes('vaccine')) return '💉';
  if (cleanColumn.includes('product') || cleanColumn.includes('safe')) return '✓';
  if (cleanColumn.includes('mentor') || cleanColumn.includes('expert') || cleanColumn.includes('advice')) return '👩‍🏫';
  if (cleanColumn.includes('share') || cleanColumn.includes('resell') || cleanColumn.includes('swap')) return '♻️';
  if (cleanColumn.includes('nursery') || cleanColumn.includes('lullaby') || cleanColumn.includes('rhyme')) return '🎵';
  if (cleanColumn.includes('multilingual') || cleanColumn.includes('language')) return '🌍';

  return '📊';
}

function generateInsights(data: any[]) {
  if (!data || data.length === 0) {
    return {
      totalResponses: 0,
      insights: [],
      topChallenges: [],
      topInterests: [],
      questions: [],
      message: 'No survey data available yet',
    };
  }

  const totalResponses = data.length;
  const insights = calculatePercentageInsights(data);

  // Count challenges/interests mentioned
  const challengeFields = ['Challenge', 'Challenges', 'Main Challenge', 'biggest challenge', 'motherhood challenges'];
  const challenges: { [key: string]: number } = {};

  data.forEach((row: any) => {
    challengeFields.forEach((field) => {
      const value = row[field];
      if (value) {
        const items = String(value).split(',').map((s: string) => s.trim());
        items.forEach((item: string) => {
          if (item) challenges[item] = (challenges[item] || 0) + 1;
        });
      }
    });
  });

  const topChallenges = Object.entries(challenges)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  // Extract interests in products/services
  const interestFields = ['Interest', 'Interested', 'App Interest', 'Features'];
  const interests: { [key: string]: number } = {};

  data.forEach((row: any) => {
    interestFields.forEach((field) => {
      const value = row[field];
      if (value) {
        const items = String(value).split(',').map((s: string) => s.trim());
        items.forEach((item: string) => {
          if (item) interests[item] = (interests[item] || 0) + 1;
        });
      }
    });
  });

  const topInterests = Object.entries(interests)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  // Extract all questions and answers from the data (excluding timestamp and PII fields)
  const excludeFields = ['Timestamp', 'timestamp', 'Date', 'date', 'Email', 'email', 'Phone', 'phone', 'Name', 'name', 'Contact'];
  const columns = Object.keys(data[0] || {}).filter(col => !excludeFields.includes(col));
  const questions: QuestionData[] = [];

  columns.forEach((column) => {
    const answers: { [key: string]: number } = {};
    let hasValues = false;

    data.forEach((row: any) => {
      const value = row[column];
      if (value) {
        hasValues = true;
        const items = String(value).split(',').map((s: string) => s.trim());
        items.forEach((item: string) => {
          if (item && item !== '') {
            answers[item] = (answers[item] || 0) + 1;
          }
        });
      }
    });

    if (hasValues && Object.keys(answers).length > 0) {
      const answerArray = Object.entries(answers)
        .sort(([, a], [, b]) => b - a)
        .map(([answer, count]) => ({ answer, count }));

      questions.push({
        question: column,
        answers: answerArray,
        type: answerArray.length > 5 ? 'text' : 'multiple',
      });
    }
  });

  return {
    totalResponses,
    insights,
    topChallenges,
    topInterests,
    questions,
  };
}
