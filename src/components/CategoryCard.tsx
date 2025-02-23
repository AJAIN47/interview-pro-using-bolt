import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: (id: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const Icon = Icons[category.icon as keyof typeof Icons];

  return (
    <div 
      onClick={() => onClick(category.id)}
      className="bg-[var(--card-bg)] p-6 rounded-lg hover:bg-[var(--card-hover)] transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-[var(--accent)] mr-3" />
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
      </div>
      <p className="text-[var(--text-secondary)]">{category.description}</p>
    </div>
  );
};