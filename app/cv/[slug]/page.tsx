export default function CVPage({ params }: { params: { slug: string } }) {
  const pdfPath = `/pdfs/${params.slug}.pdf`;
  return (
    <div className="min-h-screen bg-gradient-to-b from-highlight-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">CV: {params.slug}</h1>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
            Open in new tab
          </a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
          <object data={pdfPath} type="application/pdf" className="w-full h-[80vh]">
            <iframe src={pdfPath} className="w-full h-[80vh]" />
            <div className="p-6 text-gray-600">
              <p className="mb-2">Your browser couldn't display the PDF.</p>
              <a href={pdfPath} download className="text-primary-600 hover:text-primary-700 underline">Download CV</a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
