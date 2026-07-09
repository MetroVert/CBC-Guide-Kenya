import type { SubjectContent } from "../../types/subject";
import {
  mathematicsContent,
  englishContent,
  kiswahiliContent,
  integratedScienceContent,
  socialStudiesContent,
} from "./mathematics";

export const subjectRegistry: Record<string, SubjectContent> = {
  mathematics: mathematicsContent,
  english: englishContent,
  kiswahili: kiswahiliContent,
  "integrated-science": integratedScienceContent,
  "social-studies": socialStudiesContent,
};
