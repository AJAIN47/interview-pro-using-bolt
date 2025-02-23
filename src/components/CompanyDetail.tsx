import React from 'react';
import { Company } from '../types';
import { ExternalLink, Clock, BookOpen, Video } from 'lucide-react';

interface CompanyDetailProps {
  company: Company;
}

export const CompanyDetail: React.FC<CompanyDetailProps> = ({ company }) => {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center space-x-6">
        <div className="w-32 h-32 rounded-lg overflow-hidden bg-black/40">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{company.name}</h2>
          <p className="text-[var(--text-secondary)]">{company.description}</p>
        </div>
      </div>

      {/* Interview Process */}
      <div className="bg-[var(--card-bg)] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-6">Interview Process</h3>
        <div className="space-y-6">
          {company.interviewProcess.map((step, index) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-black font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-white">{step.title}</h4>
                <p className="text-[var(--text-secondary)] mb-2">{step.description}</p>
                <div className="flex items-center text-sm text-[var(--text-secondary)]">
                  <Clock className="w-4 h-4 mr-1" />
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Roles */}
      <div className="bg-[var(--card-bg)] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-6">Open Positions</h3>
        <div className="space-y-3">
          {company.jobRoles.map(role => (
            <a
              key={role.id}
              href={role.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-[var(--app-bg)] rounded-lg hover:bg-black/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white group-hover:text-[var(--accent)]">{role.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Level: {role.level}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-[var(--card-bg)] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-6">Learning Resources</h3>
        <div className="grid gap-4">
          {company.learningResources.map(resource => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-[var(--app-bg)] rounded-lg hover:bg-black/40 transition-colors group"
            >
              <div className="flex items-start space-x-3">
                {resource.type === 'video' ? (
                  <Video className="w-5 h-5 text-red-500" />
                ) : (
                  <BookOpen className="w-5 h-5 text-[var(--accent)]" />
                )}
                <div className="flex-grow">
                  <h4 className="font-bold text-white group-hover:text-[var(--accent)]">{resource.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {resource.platform}
                    {resource.duration && ` • ${resource.duration}`}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};