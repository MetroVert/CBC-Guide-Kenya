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
}
