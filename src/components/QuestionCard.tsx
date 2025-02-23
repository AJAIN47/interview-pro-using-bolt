import React, { useState } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [isAnswering, setIsAnswering] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    // In a real application, this would send the answer to an AI model for feedback
    alert('Answer submitted! In a full version, AI would provide feedback here.');
    setIsAnswering(false);
    setAnswer('');
  };

  const difficultyColors = {
    easy: 'bg-green-900/30 text-green-400',
    medium: 'bg-yellow-900/30 text-yellow-400',
    hard: 'bg-red-900/30 text-red-400'
  };

  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <span className={`px-3 py-1 rounded-full text-sm ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4">{question.question}</h3>
      
      {!isAnswering ? (
        <button
          onClick={() => setIsAnswering(true)}
          className="bg-[var(--accent)] text-black font-bold px-4 py-2 rounded-md hover:bg-[var(--accent-hover)] transition-colors"
        >
          Practice Answer
        </button>
      ) : (
        <div className="space-y-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full h-32 p-3 rounded-md bg-[var(--app-bg)] text-white border border-gray-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] resize-none"
            placeholder="Type your answer here..."
          />
          <div className="flex space-x-3">
            <button
              onClick={handleSubmit}
              className="bg-[var(--accent)] text-black font-bold px-4 py-2 rounded-md hover:bg-[var(--accent-hover)] transition-colors"
            >
              Submit
            </button>
            <button
              onClick={() => setIsAnswering(false)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};