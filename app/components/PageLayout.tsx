export default function PageLayout({
    children,
    title,
    description,
  }: {
    children: React.ReactNode;
    title: string;
    description?: string;
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            {description && (
              <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    );
  }