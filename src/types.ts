export interface GroupProject {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  theme: string;
  color: string;
  bgGradient: string;
  image: string;
  description: string;
  keyPoints: {
    title: string;
    description: string;
    iconName: string;
    details?: string[];
  }[];
  conclusions: string;
}

export interface ReformItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  image: string;
  avval: string;
  hozir: string;
  muammo: string;
  yechim: string;
  natija: string;
}

export interface IdeaPost {
  id: string;
  author: string;
  grade: string;
  text: string;
  category: string;
  likes: number;
  timestamp: string;
  isInitial?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface StudentEssay {
  studentName: string;
  school: string;
  grade: string;
  title: string;
  content: string;
  updatedAt: string;
}
