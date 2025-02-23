import { Category, Question, Company } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Technical Skills',
    icon: 'Code2',
    description: 'Programming concepts, system design, and technical problem-solving'
  },
  {
    id: '2',
    name: 'Behavioral',
    icon: 'Users',
    description: 'Past experiences, teamwork, and conflict resolution'
  },
  {
    id: '3',
    name: 'Career Goals',
    icon: 'Target',
    description: 'Professional aspirations and company alignment'
  }
];

export const questions: Question[] = [
  { id: '1', category: '1', question: 'Explain recursion with a practical example.', difficulty: 'medium' },
  { id: '2', category: '1', question: 'What is dynamic programming? Provide an example.', difficulty: 'hard' },
  { id: '3', category: '1', question: 'Explain the difference between REST and GraphQL.', difficulty: 'medium' },
  { id: '4', category: '1', question: 'What are WebSockets, and how do they work?', difficulty: 'hard' },
  { id: '5', category: '1', question: 'Describe the concept of time complexity and space complexity.', difficulty: 'medium' },
  { id: '6', category: '1', question: 'How does event bubbling work in JavaScript?', difficulty: 'medium' },
  { id: '7', category: '1', question: 'Explain the concept of promises in JavaScript.', difficulty: 'medium' },
  { id: '8', category: '1', question: 'What is the Virtual DOM in React?', difficulty: 'medium' },
  { id: '9', category: '1', question: 'How does garbage collection work in JavaScript?', difficulty: 'hard' },
  { id: '10', category: '1', question: 'Explain the concept of closure in JavaScript.', difficulty: 'medium' },
  { id: '11', category: '1', question: 'What is the difference between process and thread?', difficulty: 'medium' },
  { id: '12', category: '1', question: 'How does the TCP/IP protocol work?', difficulty: 'hard' },
  { id: '13', category: '1', question: 'Explain the concept of load balancing.', difficulty: 'medium' },
  { id: '14', category: '1', question: 'What is database sharding?', difficulty: 'hard' },
  { id: '15', category: '1', question: 'How does OAuth 2.0 work?', difficulty: 'hard' },
  { id: '16', category: '1', question: 'Explain the concept of dependency injection.', difficulty: 'medium' },
  { id: '17', category: '1', question: 'What are design patterns? Give examples.', difficulty: 'hard' },
  { id: '18', category: '1', question: 'How does the event loop work in JavaScript?', difficulty: 'hard' },
  { id: '19', category: '1', question: 'Explain the concept of CORS.', difficulty: 'medium' },
  { id: '20', category: '1', question: 'What is the difference between SQL and NoSQL databases?', difficulty: 'medium' },
  { id: '21', category: '1', question: "How does React's useEffect hook work?", difficulty: 'medium' },
  { id: '22', category: '1', question: 'Explain the concept of memoization.', difficulty: 'hard' },
  { id: '23', category: '1', question: 'What is the difference between call, apply, and bind?', difficulty: 'medium' },
  { id: '24', category: '1', question: 'How does CSS specificity work?', difficulty: 'medium' },
  { id: '25', category: '1', question: 'Explain the box model in CSS.', difficulty: 'easy' },
  { id: '26', category: '1', question: 'What is the difference between let, const, and var?', difficulty: 'easy' },
  { id: '27', category: '1', question: 'How does prototypal inheritance work in JavaScript?', difficulty: 'hard' },
  { id: '28', category: '1', question: 'Explain the concept of debouncing and throttling.', difficulty: 'medium' },
  { id: '29', category: '1', question: 'What are Web Workers?', difficulty: 'medium' },
  { id: '30', category: '1', question: 'How does the this keyword work in JavaScript?', difficulty: 'medium' },
  { id: '31', category: '1', question: 'Explain the concept of server-side rendering.', difficulty: 'hard' },
  { id: '32', category: '1', question: 'What is the difference between cookies and local storage?', difficulty: 'medium' },
  { id: '33', category: '1', question: 'How does the React reconciliation process work?', difficulty: 'hard' },
  { id: '34', category: '1', question: 'Explain the concept of middleware.', difficulty: 'medium' },
  { id: '35', category: '1', question: 'What is the difference between authentication and authorization?', difficulty: 'medium' },
  { id: '36', category: '1', question: 'How does the CSS Grid layout work?', difficulty: 'medium' },
  { id: '37', category: '1', question: 'Explain the concept of lazy loading.', difficulty: 'medium' },
  { id: '38', category: '1', question: 'What are service workers?', difficulty: 'hard' },
  { id: '39', category: '1', question: 'How does the browser rendering engine work?', difficulty: 'hard' },
  { id: '40', category: '1', question: 'Explain the concept of code splitting.', difficulty: 'medium' },
  { id: '41', category: '1', question: 'What is the difference between map and forEach?', difficulty: 'easy' },
  { id: '42', category: '1', question: 'How does the React Context API work?', difficulty: 'medium' },
  { id: '43', category: '1', question: 'Explain the concept of progressive web apps.', difficulty: 'medium' },
  { id: '44', category: '1', question: 'What is the difference between null and undefined?', difficulty: 'easy' },
  { id: '45', category: '1', question: 'How does the CSS Flexbox layout work?', difficulty: 'medium' },
  { id: '46', category: '1', question: 'Explain the concept of web accessibility.', difficulty: 'medium' },
  { id: '47', category: '1', question: 'What are Higher-Order Components in React?', difficulty: 'medium' },
  { id: '48', category: '1', question: 'How does the JavaScript module system work?', difficulty: 'medium' },
  { id: '49', category: '1', question: 'Explain the concept of cross-site scripting (XSS).', difficulty: 'hard' },
  { id: '50', category: '1', question: 'What is the difference between shallow and deep copying?', difficulty: 'medium' },
  { id: '51', category: '1', question: 'How does the React Fiber architecture work?', difficulty: 'hard' },
  { id: '52', category: '1', question: 'Explain the concept of web components.', difficulty: 'medium' },
  { id: '53', category: '1', question: 'What is the difference between synchronous and asynchronous code?', difficulty: 'medium' },
  { id: '54', category: '1', question: 'How does the CSS positioning system work?', difficulty: 'medium' },
  { id: '55', category: '1', question: 'Explain the concept of micro-frontends.', difficulty: 'hard' },
  { id: '56', category: '1', question: 'What are React hooks? List the common ones.', difficulty: 'medium' },
  { id: '57', category: '1', question: 'How does the browser caching mechanism work?', difficulty: 'medium' },
  { id: '58', category: '1', question: 'Explain the concept of server-sent events.', difficulty: 'medium' },
  { id: '59', category: '1', question: 'What is the difference between class and functional components?', difficulty: 'medium' },
  { id: '60', category: '1', question: 'How does the CSS preprocessor work?', difficulty: 'medium' },
  { id: '61', category: '1', question: 'Explain the concept of web security.', difficulty: 'hard' },
  { id: '62', category: '1', question: 'What are React portals?', difficulty: 'medium' },
  { id: '63', category: '1', question: 'How does the JavaScript event delegation work?', difficulty: 'medium' },
  { id: '64', category: '1', question: 'Explain the concept of responsive design.', difficulty: 'medium' },
  { id: '65', category: '1', question: 'What is the difference between props and state?', difficulty: 'easy' },
  { id: '66', category: '1', question: 'How does the browser storage work?', difficulty: 'medium' },
  { id: '67', category: '1', question: 'Explain the concept of CSS modules.', difficulty: 'medium' },
  { id: '68', category: '1', question: 'What are React render props?', difficulty: 'medium' },
  { id: '69', category: '1', question: 'How does the JavaScript prototype chain work?', difficulty: 'hard' },
  { id: '70', category: '1', question: 'Explain the concept of web performance optimization.', difficulty: 'hard' },
  { id: '71', category: '1', question: 'What is the difference between controlled and uncontrolled components?', difficulty: 'medium' },
  { id: '72', category: '1', question: 'How does the CSS cascade work?', difficulty: 'medium' },
  { id: '73', category: '1', question: 'Explain the concept of web workers.', difficulty: 'medium' },
  { id: '74', category: '1', question: 'What are React fragments?', difficulty: 'easy' },
  { id: '75', category: '1', question: 'How does the JavaScript garbage collection work?', difficulty: 'hard' },
  { id: '76', category: '1', question: 'Explain the concept of web animations.', difficulty: 'medium' },
  { id: '77', category: '1', question: 'What is the difference between useMemo and useCallback?', difficulty: 'medium' },
  { id: '78', category: '1', question: 'How does the CSS box-sizing property work?', difficulty: 'medium' },
  { id: '79', category: '1', question: 'Explain the concept of web storage.', difficulty: 'medium' },
  { id: '80', category: '1', question: 'What are React error boundaries?', difficulty: 'medium' },
  { id: '81', category: '1', question: 'How does the JavaScript this binding work?', difficulty: 'hard' },
  { id: '82', category: '1', question: 'Explain the concept of web sockets.', difficulty: 'medium' },
  { id: '83', category: '1', question: 'What is the difference between createElement and cloneElement?', difficulty: 'medium' },
  { id: '84', category: '1', question: 'How does the CSS transform property work?', difficulty: 'medium' },
  { id: '85', category: '1', question: 'Explain the concept of web APIs.', difficulty: 'medium' },
  { id: '86', category: '1', question: 'What are React refs?', difficulty: 'medium' },
  { id: '87', category: '1', question: 'How does the JavaScript event loop work?', difficulty: 'hard' },
  { id: '88', category: '1', question: 'Explain the concept of web fonts.', difficulty: 'medium' },
  { id: '89', category: '1', question: 'What is the difference between memo and useMemo?', difficulty: 'medium' },
  { id: '90', category: '1', question: 'How does the CSS transition property work?', difficulty: 'medium' },
  { id: '91', category: '1', question: 'Explain the concept of web accessibility.', difficulty: 'medium' },
  { id: '92', category: '1', question: 'What are React keys?', difficulty: 'easy' },
  { id: '93', category: '1', question: 'How does the JavaScript scope work?', difficulty: 'medium' },
  { id: '94', category: '1', question: 'Explain the concept of web forms.', difficulty: 'medium' },
  { id: '95', category: '1', question: 'What is the difference between class and className?', difficulty: 'easy' },
  { id: '96', category: '1', question: 'How does the CSS animation property work?', difficulty: 'medium' },
  { id: '97', category: '1', question: 'Explain the concept of web security.', difficulty: 'hard' },
  { id: '98', category: '1', question: 'What are React propTypes?', difficulty: 'medium' },
  { id: '99', category: '1', question: 'How does the JavaScript hoisting work?', difficulty: 'medium' },
  { id: '100', category: '1', question: 'Explain the concept of microservices architecture.', difficulty: 'hard' },
  
  { id: '101', category: '2', question: 'Tell me about a time you handled a conflict in a team.', difficulty: 'medium' },
  { id: '102', category: '2', question: 'Describe a situation where you had to adapt to a sudden change.', difficulty: 'medium' },
  { id: '103', category: '2', question: 'Have you ever worked under a difficult manager? How did you handle it?', difficulty: 'hard' },
  { id: '104', category: '2', question: 'Tell me about a time when you failed at a project.', difficulty: 'medium' },
  { id: '105', category: '2', question: 'How do you handle working under pressure?', difficulty: 'medium' },
  { id: '106', category: '2', question: 'Describe a situation where you had to lead a team.', difficulty: 'hard' },
  { id: '107', category: '2', question: 'Tell me about a time you had to make a difficult decision.', difficulty: 'medium' },
  { id: '108', category: '2', question: 'How do you handle criticism?', difficulty: 'medium' },
  { id: '109', category: '2', question: 'Describe a situation where you went above and beyond.', difficulty: 'medium' },
  { id: '110', category: '2', question: 'How do you handle disagreements with coworkers?', difficulty: 'hard' },
  { id: '111', category: '2', question: 'Tell me about a time you had to learn something quickly.', difficulty: 'medium' },
  { id: '112', category: '2', question: 'How do you prioritize your work?', difficulty: 'medium' },
  { id: '113', category: '2', question: 'Describe a situation where you showed initiative.', difficulty: 'medium' },
  { id: '114', category: '2', question: 'How do you handle tight deadlines?', difficulty: 'medium' },
  { id: '115', category: '2', question: 'Tell me about a time you had to work with a difficult team member.', difficulty: 'hard' },
  { id: '116', category: '2', question: 'How do you stay motivated?', difficulty: 'medium' },
  { id: '117', category: '2', question: 'Describe a situation where you had to give difficult feedback.', difficulty: 'hard' },
  { id: '118', category: '2', question: 'How do you handle stress?', difficulty: 'medium' },
  { id: '119', category: '2', question: 'Tell me about a time you had to deal with ambiguity.', difficulty: 'hard' },
  { id: '120', category: '2', question: 'How do you handle multiple competing priorities?', difficulty: 'medium' },
  { id: '121', category: '2', question: 'Describe a situation where you had to influence others.', difficulty: 'hard' },
  { id: '122', category: '2', question: 'How do you handle failure?', difficulty: 'medium' },
  { id: '123', category: '2', question: 'Tell me about a time you had to work with limited resources.', difficulty: 'medium' },
  { id: '124', category: '2', question: 'How do you handle feedback?', difficulty: 'medium' },
  { id: '125', category: '2', question: 'Describe a situation where you had to solve a complex problem.', difficulty: 'hard' },
  { id: '126', category: '2', question: 'How do you handle conflict?', difficulty: 'medium' },
  { id: '127', category: '2', question: 'Tell me about a time you had to work on a team project.', difficulty: 'medium' },
  { id: '128', category: '2', question: 'How do you handle change?', difficulty: 'medium' },
  { id: '129', category: '2', question: 'Describe a situation where you had to meet tight deadlines.', difficulty: 'medium' },
  { id: '130', category: '2', question: 'Tell me about a time you had to learn a new technology quickly.', difficulty: 'medium' },
  { id: '131', category: '3', question: 'What are your career goals for the next five years?', difficulty: 'easy' },
  { id: '132', category: '3', question: 'Why do you want to work at this company?', difficulty: 'easy' },
  { id: '133', category: '3', question: 'How do you plan to grow in this role?', difficulty: 'medium' }
];

export const companies: Company[] = [
  {
    id: '1',
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=200&h=200',
    description: 'Leading technology company known for innovation and challenging interview process',
    interviewProcess: [
      {
        id: '1',
        title: 'Phone Screen',
        description: 'Initial technical screening with a recruiter to discuss your background and assess basic qualifications',
        duration: '30-45 minutes'
      },
      {
        id: '2',
        title: 'Technical Phone Interview',
        description: 'Coding and problem-solving interview with an engineer focusing on data structures and algorithms',
        duration: '45-60 minutes'
      },
      {
        id: '3',
        title: 'Virtual Technical Rounds',
        description: '2 rounds of technical interviews covering coding, system design, and problem-solving',
        duration: '2 hours'
      },
      {
        id: '4',
        title: 'Onsite Interviews',
        description: '4-5 rounds covering coding, system design, behavioral questions, and team fit',
        duration: '4-5 hours'
      },
      {
        id: '5',
        title: 'Team Matching',
        description: 'Discussions with potential teams to find the best fit for your skills and interests',
        duration: '1-2 weeks'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'L3/L4',
        url: 'https://careers.google.com/jobs/results/?distance=50&q=Software%20Engineer'
      },
      {
        id: '2',
        title: 'Senior Software Engineer',
        level: 'L5',
        url: 'https://careers.google.com/jobs/results/?distance=50&q=Senior%20Software%20Engineer'
      },
      {
        id: '3',
        title: 'Staff Software Engineer',
        level: 'L6',
        url: 'https://careers.google.com/jobs/results/?distance=50&q=Staff%20Software%20Engineer'
      },
      {
        id: '4',
        title: 'Research Scientist',
        level: 'L4/L5',
        url: 'https://careers.google.com/jobs/results/?distance=50&q=Research%20Scientist'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Google Coding Interview',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=XKu_SEDAykw',
        platform: 'YouTube',
        duration: '11:45'
      },
      {
        id: '2',
        title: 'System Design Interview',
        type: 'course',
        url: 'https://www.educative.io/course/grokking-the-system-design-interview',
        platform: 'Educative'
      },
      {
        id: '3',
        title: 'Google Interview Preparation',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=wwIysnVmAUg',
        platform: 'YouTube',
        duration: '28:15'
      },
      {
        id: '4',
        title: 'Google Career Certificates',
        type: 'course',
        url: 'https://grow.google/certificates',
        platform: 'Google'
      }
    ]
  },
  {
    id: '2',
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1642132652075-2f0d736a8cea?auto=format&fit=crop&w=200&h=200',
    description: 'Global technology leader with a comprehensive interview process focused on growth mindset',
    interviewProcess: [
      {
        id: '1',
        title: 'Initial Screen',
        description: 'Basic technical and background check with HR to understand your experience and goals',
        duration: '30 minutes'
      },
      {
        id: '2',
        title: 'Technical Phone Screen',
        description: 'Technical discussion and coding exercise with an engineer',
        duration: '45-60 minutes'
      },
      {
        id: '3',
        title: 'Technical Round',
        description: 'In-depth coding and algorithm questions with focus on problem-solving approach',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'System Design',
        description: 'Architecture discussion and system design challenges',
        duration: '1 hour'
      },
      {
        id: '5',
        title: 'Final Rounds',
        description: 'Multiple interviews including design, behavioral, and culture fit',
        duration: '4 hours'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'SDE I',
        url: 'https://careers.microsoft.com/us/en/search-results?keywords=Software%20Engineer'
      },
      {
        id: '2',
        title: 'Senior Software Engineer',
        level: 'SDE II',
        url: 'https://careers.microsoft.com/us/en/search-results?keywords=Senior%20Software%20Engineer'
      },
      {
        id: '3',
        title: 'Principal Software Engineer',
        level: 'Principal',
        url: 'https://careers.microsoft.com/us/en/search-results?keywords=Principal%20Software%20Engineer'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Microsoft Interview Tips',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=YJZCUhxNCv8',
        platform: 'YouTube',
        duration: '15:20'
      },
      {
        id: '2',
        title: 'Microsoft Learn',
        type: 'course',
        url: 'https://learn.microsoft.com/',
        platform: 'Microsoft'
      },
      {
        id: '3',
        title: 'System Design at Microsoft',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=q0KGYwNbf-0',
        platform: 'YouTube',
        duration: '25:30'
      }
    ]
  },
  {
    id: '3',
    name: 'Amazon',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=200&h=200',
    description: 'E-commerce and cloud computing giant focusing on leadership principles and customer obsession',
    interviewProcess: [
      {
        id: '1',
        title: 'Online Assessment',
        description: 'Coding challenges and work simulation focused on data structures and algorithms',
        duration: '2 hours'
      },
      {
        id: '2',
        title: 'Phone Interviews',
        description: 'Technical and behavioral rounds with emphasis on leadership principles',
        duration: '45-60 minutes'
      },
      {
        id: '3',
        title: 'Technical Screen',
        description: 'In-depth coding and system design discussion',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Virtual Onsite',
        description: '4-5 interviews focusing on leadership principles and technical depth',
        duration: '5 hours'
      },
      {
        id: '5',
        title: 'Bar Raiser',
        description: 'Final interview with an experienced interviewer to ensure high hiring standards',
        duration: '1 hour'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Development Engineer',
        level: 'SDE I',
        url: 'https://www.amazon.jobs/en/job_categories/software-development'
      },
      {
        id: '2',
        title: 'Senior SDE',
        level: 'SDE II',
        url: 'https://www.amazon.jobs/en/search?base_query=Senior+Software+Development+Engineer'
      },
      {
        id: '3',
        title: 'Principal SDE',
        level: 'Principal',
        url: 'https://www.amazon.jobs/en/search?base_query=Principal+Software+Development+Engineer'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Amazon Leadership Principles',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=B-xdfQv3I1k',
        platform: 'YouTube',
        duration: '12:30'
      },
      {
        id: '2',
        title: 'AWS Certification Training',
        type: 'course',
        url: 'https://aws.amazon.com/training/',
        platform: 'AWS'
      },
      {
        id: '3',
        title: 'System Design for Amazon',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=sYe4r8WXGQg',
        platform: 'YouTube',
        duration: '32:15'
      }
    ]
  },
  {
    id: '4',
    name: 'Meta',
    logo: 'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?auto=format&fit=crop&w=200&h=200',
    description: 'Social media technology company with focus on scaling challenges and user experience',
    interviewProcess: [
      {
        id: '1',
        title: 'Initial Screen',
        description: 'Technical screening with recruiter to assess experience and cultural fit',
        duration: '30 minutes'
      },
      {
        id: '2',
        title: 'Technical Interview',
        description: 'Coding and problem-solving with focus on algorithms',
        duration: '45 minutes'
      },
      {
        id: '3',
        title: 'System Design',
        description: 'Discussion about designing scalable systems',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Behavioral',
        description: 'Culture fit and past experience discussion',
        duration: '45 minutes'
      },
      {
        id: '5',
        title: 'Team Match',
        description: 'Meeting with potential teams',
        duration: '1 hour'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'E3/E4',
        url: 'https://www.metacareers.com/jobs/?q=Software%20Engineer'
      },
      {
        id: '2',
        title: 'Production Engineer',
        level: 'E3/E4',
        url: 'https://www.metacareers.com/jobs/?q=Production%20Engineer'
      },
      {
        id: '3',
        title: 'Research Scientist',
        level: 'IC4/IC5',
        url: 'https://www.metacareers.com/jobs/?q=Research%20Scientist'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Meta Interview Process',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=PIeiiceWe_w',
        platform: 'YouTube',
        duration: '14:15'
      },
      {
        id: '2',
        title: 'System Design at Meta',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=bUHFg8CZFws',
        platform: 'YouTube',
        duration: '28:45'
      },
      {
        id: '3',
        title: 'Meta Open Source',
        type: 'course',
        url: 'https://opensource.fb.com/',
        platform: 'Meta'
      }
    ]
  },
  {
    id: '5',
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=200&h=200',
    description: 'Innovation-focused technology company with emphasis on product thinking and user experience',
    interviewProcess: [
      {
        id: '1',
        title: 'Phone Screen',
        description: 'Initial technical assessment and background discussion',
        duration: '45 minutes'
      },
      {
        id: '2',
        title: 'Technical Interview',
        description: 'Coding and architecture discussion',
        duration: '1 hour'
      },
      {
        id: '3',
        title: 'Design Round',
        description: 'Product design and technical architecture',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Team Interviews',
        description: 'Multiple rounds with potential team members',
        duration: '3 hours'
      },
      {
        id: '5',
        title: 'Manager Interview',
        description: 'Final discussion with hiring manager',
        duration: '1 hour'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'ICT2/ICT3',
        url: 'https://jobs.apple.com/en-us/search?team=software-and-services'
      },
      {
        id: '2',
        title: 'Machine Learning Engineer',
        level: 'ICT3/ICT4',
        url: 'https://jobs.apple.com/en-us/search?team=machine-learning-and-ai'
      },
      {
        id: '3',
        title: 'Systems Engineer',
        level: 'ICT3',
        url: 'https://jobs.apple.com/en-us/search?team=systems-engineering'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Apple Interview Experience',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=5gkZf4HzpMs',
        platform: 'YouTube',
        duration: '16:45'
      },
      {
        id: '2',
        title: 'iOS Development',
        type: 'course',
        url: 'https://developer.apple.com/tutorials/swiftui',
        platform: 'Apple Developer'
      },
      {
        id: '3',
        title: 'System Design for Apple',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=9CO6M2HCjZY',
        platform: 'YouTube',
        duration: '23:10'
      }
    ]
  },
  {
    id: '6',
    name: 'Netflix',
    logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=200&h=200',
    description: 'Streaming giant known for its unique culture and high performance expectations',
    interviewProcess: [
      {
        id: '1',
        title: 'Technical Screen',
        description: 'In-depth technical discussion and coding exercise',
        duration: '1 hour'
      },
      {
        id: '2',
        title: 'System Design',
        description: 'Architecture and scalability discussion',
        duration: '1.5 hours'
      },
      {
        id: '3',
        title: 'Technical Deep Dive',
        description: 'Detailed discussion about past projects',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Culture Fit',
        description: 'Discussion about Netflix values and culture',
        duration: '1 hour'
      },
      {
        id: '5',
        title: 'Full Loop',
        description: 'Multiple interviews with different teams',
        duration: '6 hours'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Senior Software Engineer',
        level: 'Senior',
        url: 'https://jobs.netflix.com/search?q=Software%20Engineer'
      },
      {
        id: '2',
        title: 'Platform Engineer',
        level: 'Senior',
        url: 'https://jobs.netflix.com/search?q=Platform%20Engineer'
      },
      {
        id: '3',
        title: 'Infrastructure Engineer',
        level: 'Senior',
        url: 'https://jobs.netflix.com/search?q=Infrastructure%20Engineer'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Netflix Culture',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=YvqiGGn1hcI',
        platform: 'YouTube',
        duration: '18:30'
      },
      {
        id: '2',
        title: 'Netflix Tech Blog',
        type: 'article',
        url: 'https://netflixtechblog.com/',
        platform: 'Medium'
      },
      {
        id: '3',
        title: 'System Design Netflix',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=psQzyFfsUGU',
        platform: 'YouTube',
        duration: '45:20'
      }
    ]
  },
  {
    id: '7',
    name: 'Uber',
    logo: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=200&h=200',
    description: 'Transportation technology company with complex distributed systems and real-time challenges',
    interviewProcess: [
      {
        id: '1',
        title: 'Coding Challenge',
        description: 'Online assessment with algorithmic problems',
        duration: '90 minutes'
      },
      {
        id: '2',
        title: 'Technical Phone Screen',
        description: 'Coding and problem-solving discussion',
        duration: '1 hour'
      },
      {
        id: '3',
        title: 'System Design',
        description: 'Distributed systems and architecture',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Behavioral',
        description: 'Culture and experience discussion',
        duration: '45 minutes'
      },
      {
        id: '5',
        title: 'Virtual Onsite',
        description: 'System design and coding rounds',
        duration: '5 hours'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'L3/L4',
        url: 'https://www.uber.com/us/en/careers/list/?department=Engineering'
      },
      {
        id: '2',
        title: 'Senior Software Engineer',
        level: 'L5',
        url: 'https://www.uber.com/us/en/careers/list/?department=Engineering'
      },
      {
        id: '3',
        title: 'Machine Learning Engineer',
        level: 'L4/L5',
        url: 'https://www.uber.com/us/en/careers/list/?department=Engineering'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Uber System Design',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=umWABit-wbk',
        platform: 'YouTube',
        duration: '20:15'
      },
      {
        id: '2',
        title: 'Uber Engineering Blog',
        type: 'article',
        url: 'https://eng.uber.com/',
        platform: 'Uber'
      },
      {
        id: '3',
        title: 'Distributed Systems',
        type: 'course',
        url: 'https://www.educative.io/courses/distributed-systems-practitioners',
        platform: 'Educative'
      }
    ]
  },
  {
    id: '8',
    name: 'Twitter',
    logo: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=200&h=200',
    description: 'Social media platform handling massive real-time data and scalability challenges',
    interviewProcess: [
      {
        id: '1',
        title: 'Technical Phone Screen',
        description: 'Coding and problem-solving assessment',
        duration: '45 minutes'
      },
      {
        id: '2',
        title: 'Coding Round',
        description: 'In-depth programming challenge',
        duration: '1 hour'
      },
      {
        id: '3',
        title: 'System Design',
        description: 'Scalable architecture discussion',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Technical Deep Dive',
        description: 'Discussion about past projects',
        duration: '1 hour'
      },
      {
        id: '5',
        title: 'Virtual Onsite',
        description: 'Multiple technical rounds',
        duration: '4 hours'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'L3/L4',
        url: 'https://careers.twitter.com/en/roles.html'
      },
      {
        id: '2',
        title: 'Senior Software Engineer',
        level: 'L5',
        url: 'https://careers.twitter.com/en/roles.html'
      },
      {
        id: '3',
        title: 'Machine Learning Engineer',
        level: 'L4/L5',
        url: 'https://careers.twitter.com/en/roles.html'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Twitter Interview Process',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=5KB6BXk6-sY',
        platform: 'YouTube',
        duration: '13:45'
      },
      {
        id: '2',
        title: 'Twitter Engineering Blog',
        type: 'article',
        url: 'https://blog.twitter.com/engineering/en_us',
        platform: 'Twitter'
      },
      {
        id: '3',
        title: 'Distributed Systems at Scale',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=8T-HtRwYXtI',
        platform: 'YouTube',
        duration: '35:20'
      }
    ]
  },
  {
    id: '9',
    name: 'LinkedIn',
    logo: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=200&h=200',
    description: 'Professional networking platform with focus on scalable systems and professional development',
    interviewProcess: [
      {
        id: '1',
        title: 'Phone Screen',
        description: 'Basic technical assessment and background check',
        duration: '30 minutes'
      },
      {
        id: '2',
        title: 'Coding Round',
        description: 'Algorithm and data structure focus',
        duration: '1 hour'
      },
      {
        id: '3',
        title: 'System Design',
        description: 'Architecture and scalability discussion',
        duration: '1 hour'
      },
      {
        id: '4',
        title: 'Behavioral',
        description: 'Culture fit assessment',
        duration: '45 minutes'
      },
      {
        id: '5',
        title: 'Technical Rounds',
        description: 'Multiple coding and design rounds',
        duration: '4 hours'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'SE/SSE',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Software%20Engineer&f_C=1337'
      },
      {
        id: '2',
        title: 'Staff Software Engineer',
        level: 'Staff',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Staff%20Software%20Engineer&f_C=1337'
      },
      {
        id: '3',
        title: 'Machine Learning Engineer',
        level: 'SE/SSE',
        url: 'https://www.linkedin.com/jobs/search/?keywords=Machine%20Learning%20Engineer&f_C=1337'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'LinkedIn Engineering Culture',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=JqYV1YpXW9U',
        platform: 'YouTube',
        duration: '15:20'
      },
      {
        id: '2',
        title: 'LinkedIn Engineering Blog',
        type: 'article',
        url: 'https://engineering.linkedin.com/blog',
        platform: 'LinkedIn'
      },
      {
        id: '3',
        title: 'System Design LinkedIn',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=cB7UF3zp8RU',
        platform: 'YouTube',
        duration: '28:45'
      }
    ]
  },
  {
    id: '10',
    name: 'Salesforce',
    logo: 'https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&w=200&h=200',
    description: 'Cloud-based software company with enterprise focus',
    interviewProcess: [
      {
        id: '1',
        title: 'Initial Screen',
        description: 'Technical discussion with recruiter',
        duration: '30 minutes'
      },
      {
        id: '2',
        title: 'Technical Interview',
        description: 'Coding and system design',
        duration: '3 hours'
      }
    ],
    jobRoles: [
      {
        id: '1',
        title: 'Software Engineer',
        level: 'L3/L4',
        url: 'https://salesforce.wd1.myworkdayjobs.com/External_Career_Site'
      }
    ],
    learningResources: [
      {
        id: '1',
        title: 'Salesforce Developer Skills',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=WR8Dq6HqxqQ',
        platform: 'YouTube',
        duration: '17:30'
      }
    ]
  }]
 