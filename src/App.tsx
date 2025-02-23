import React, { useState } from 'react';
import { CategoryCard } from './components/CategoryCard';
import { QuestionCard } from './components/QuestionCard';
import { CompanyCard } from './components/CompanyCard';
import { CompanyDetail } from './components/CompanyDetail';
import { AuthModal } from './components/AuthModal';
import { categories, questions, companies } from './data/mockData';
import { ArrowLeft, Briefcase, BookOpen, LogOut, UserCircle } from 'lucide-react';
import { useAuth } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const { user, signOut } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'practice' | 'companies'>('companies');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleCompanyClick = (companyId: string) => {
    setSelectedCompany(companyId);
  };

  const filteredQuestions = selectedCategory
    ? questions.filter(q => q.category === selectedCategory)
    : [];

  const selectedCategoryData = selectedCategory
    ? categories.find(c => c.id === selectedCategory)
    : null;

  const selectedCompanyData = selectedCompany
    ? companies.find(c => c.id === selectedCompany)
    : null;

  return (
    <div className="min-h-screen bg-[var(--app-bg)]">
      <Toaster position="top-right" />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-black p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">InterviewPro</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">Your Interview Guide</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('companies')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
              activeTab === 'companies'
                ? 'bg-[var(--accent)] text-white'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Companies</span>
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
              activeTab === 'practice'
                ? 'bg-[var(--accent)] text-white'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Practice</span>
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          {user ? (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white">
                <UserCircle className="w-5 h-5" />
                <span className="text-sm truncate">{user.email}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full px-4 py-2 rounded-md bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {activeTab === 'practice' ? (
          // Practice Questions Section
          selectedCategory ? (
            <div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center text-[var(--text-secondary)] hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Categories
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6">
                {selectedCategoryData?.name} Questions
              </h2>
              
              <div className="space-y-4">
                {filteredQuestions.map(question => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Choose a Category
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {categories.map(category => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onClick={handleCategoryClick}
                  />
                ))}
              </div>
            </div>
          )
        ) : (
          // Companies Section
          selectedCompany ? (
            <div>
              <button
                onClick={() => setSelectedCompany(null)}
                className="flex items-center text-[var(--text-secondary)] hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Companies
              </button>
              
              {selectedCompanyData && (
                <CompanyDetail company={selectedCompanyData} />
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Top Companies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {companies.map(company => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    onClick={handleCompanyClick}
                  />
                ))}
              </div>
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;