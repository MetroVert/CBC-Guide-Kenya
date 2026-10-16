import type { ReactNode } from "react";
import type { ColorKey } from "../lib/subjectTheme";

export interface SubjectTopic {
  title: string;
  description: string;
}

export interface SubjectResourceItem {
  title: string;
  description: string;
  meta?: string;
}

export interface SubjectFAQ {
  question: string;
  answer: string;
}

export interface LessonSection {
  heading: string;
  paragraphs: string[];
  examples?: {
    prompt: string;
    steps: string[];
    answer: string;
  }[];
}

export interface WorksheetQuestion {
  prompt: string;
  answer: string;
  explanation: string;
}

export interface QuizQuestion {
  prompt: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

export interface InteractiveQuiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface InteractiveLearningModule {
  lessonTitle: string;
  introduction: string;
  lessonGoals: string[];
  lessonSections: LessonSection[];
  curriculumSource: {
    title: string;
    label: string;
    url: string;
    note: string;
  };
  worksheet: {
    title: string;
    instructions: string;
    questions: WorksheetQuestion[];
  };
  quizzes: InteractiveQuiz[];
}

export interface SubjectContent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  colorKey: ColorKey;
  icon: ReactNode;
  outcomes: string[];
  topics: SubjectTopic[];
  notes: SubjectResourceItem[];
  practiceSets: SubjectResourceItem[];
  quizzes: SubjectResourceItem[];
  downloads: SubjectResourceItem[];
  videos: SubjectResourceItem[];
  faqs: SubjectFAQ[];
  learningModule?: InteractiveLearningModule;
}
