import React from 'react';
import { Company } from '../types';
import { ChevronRight } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  onClick: (id: string) => void;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, onClick }) => {
  return (
    <div 
      onClick={() => onClick(company.id)}
      className="bg-[var(--card-bg)] rounded-lg p-4 hover:bg-[var(--card-hover)] transition-all duration-300 cursor-pointer group"
    >
      <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-black/40">
        <img 
          src={company.logo} 
          alt={`${company.name} logo`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-white font-bold mb-2">{company.name}</h3>
      <p className="text-[var(--text-secondary)] text-sm line-clamp-2 mb-4">{company.description}</p>
      <div className="flex items-center justify-between text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors">
        <span className="text-sm font-medium">View Details</span>
        <ChevronRight className="w-5 h-5" />
      </div>
    </div>
  );
};