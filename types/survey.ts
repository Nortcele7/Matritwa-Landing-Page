export type MotherStatus = "expecting" | "new-mom" | "experienced-mom";

export type Challenge =
  | "baby-expenses"
  | "health-guidance"
  | "emotional-support"
  | "employment"
  | "vaccine-tracking"
  | "safe-products";

export type BabyItem =
  | "clothes"
  | "toys"
  | "cribs"
  | "strollers"
  | "car-seats"
  | "feeding-items"
  | "books"
  | "other";

export type ItemAction = "resell" | "donate" | "swap";

export interface SurveyData {
  // Basic Info
  name?: string;
  city: string;
  motherStatus: MotherStatus;
  numberOfChildren: number;

  // Challenges
  challenges: Challenge[];

  // Baby Items
  unusedItems: BabyItem[];
  itemActions: ItemAction[];

  // App Interest
  interestedInBuying: boolean;
  interestedInSelling: boolean;
  nurseChatbotInterest: number; // 1-5
  communityInterest: number; // 1-5

  // Feedback
  openFeedback: string;
}
