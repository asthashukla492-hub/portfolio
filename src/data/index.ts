import type { Project, SkillCategory, LearningItem } from '../types';

// ----- PROJECTS -----
export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    name: 'Cyber Security',
    tagline: 'Security awareness & concepts',
    description:
      'A cybersecurity-focused web project designed to present security concepts and information through an interactive, well-structured web interface.',
    overview:
      'This project is a web-based platform dedicated to cybersecurity awareness. It presents security concepts, best practices, and information in an accessible and visually engaging way, making it easier for users to understand the importance of digital security.',
    problem:
      'Cybersecurity information is often scattered, technical, and hard to access for students and general users. There needed to be a clean, focused resource that organises security knowledge effectively.',
    solution:
      'Built a structured web interface that presents cybersecurity topics clearly, using interactive elements and a clean layout to make information digestible and easy to navigate.',
    features: [
      'Organized presentation of cybersecurity concepts',
      'Clean, intuitive navigation across security topics',
      'Interactive interface for engaging with content',
      'Responsive design for all devices',
      'Modern UI with focus on readability',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    learned:
      'Through this project, I deepened my understanding of how to structure information effectively, create intuitive user interfaces, and apply cybersecurity knowledge in a practical web context.',
    liveUrl: 'https://cyber-security-nozk.vercel.app',
    githubUrl: 'https://github.com/asthashukla',
    image: '/cyber-security-preview.png',
  },
  {
    id: 2,
    number: '02',
    name: 'Omni Drive',
    tagline: 'Modern digital resource manager',
    description:
      'A modern web-based project focused on providing an organized digital experience for managing and interacting with resources through a clean, user-friendly interface.',
    overview:
      'Omni Drive is a web application designed around the concept of organized digital resource management. It provides users with a streamlined interface to interact with and organize digital content, focusing on usability and clean design.',
    problem:
      'Managing digital resources and files can be disorganized and frustrating. Existing solutions are often cluttered or require technical knowledge to navigate effectively.',
    solution:
      'Developed a web interface with a clean, minimal design that focuses on ease of use, making it simple to navigate and organize digital resources without unnecessary complexity.',
    features: [
      'Clean, minimal user interface for resource management',
      'Organized layout for easy navigation',
      'Responsive design that works on desktop and mobile',
      'Modern component-based architecture',
      'Fast and lightweight web experience',
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Vercel'],
    learned:
      'This project helped me improve my skills in component architecture, state management, and designing interfaces that prioritize user experience and simplicity.',
    liveUrl: 'https://omni-drive-x7js-rho.vercel.app',
    githubUrl: 'https://github.com/asthashukla',
    image: '/omni-drive-preview.png',
  },
];

// ----- SKILLS -----
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '< />',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
  {
    title: 'Interests',
    icon: '✦',
    skills: ['Cybersecurity', 'Web Development', 'Problem Solving', 'Tech'],
  },
];

// ----- LEARNING -----
export const learningItems: LearningItem[] = [
  {
    number: '01',
    icon: '🌐',
    title: 'Web Development',
    description: 'Building responsive and interactive web applications using modern tools and frameworks.',
  },
  {
    number: '02',
    icon: '🔐',
    title: 'Cybersecurity',
    description: 'Understanding security concepts, threat models, and building safer digital systems.',
  },
  {
    number: '03',
    icon: '⚡',
    title: 'Programming',
    description: 'Improving problem-solving skills and deepening understanding of programming fundamentals.',
  },
  {
    number: '04',
    icon: '🚀',
    title: 'Development Tools',
    description: 'Learning modern developer workflows, deployment pipelines, and collaboration tools.',
  },
];
