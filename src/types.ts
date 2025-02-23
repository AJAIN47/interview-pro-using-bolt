export interface Question {
  id: string;
  category: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  interviewProcess: InterviewStep[];
  jobRoles: JobRole[];
  learningResources: Resource[];
}

export interface InterviewStep {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface JobRole {
  id: string;
  title: string;
  level: string;
  url: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'course';
  url: string;
  platform: string;
  duration?: string;
}