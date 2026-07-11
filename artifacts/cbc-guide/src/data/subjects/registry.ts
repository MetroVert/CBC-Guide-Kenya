import type { SubjectContent } from "../../types/subject";
import {
  mathematicsContent,
  englishContent,
  kiswahiliContent,
  integratedScienceContent,
  socialStudiesContent,
  creativeArtsContent,
  preTechnicalStudiesContent,
  agricultureNutritionContent,
  lifeSkillsValuesContent,
  religiousEducationContent,
  businessStudiesContent,
  healthEducationContent,
  computerStudiesContent,
} from "./mathematics";

export const subjectRegistry: Record<string, SubjectContent> = {
  mathematics: mathematicsContent,
  english: englishContent,
  kiswahili: kiswahiliContent,
  "integrated-science": integratedScienceContent,
  "social-studies": socialStudiesContent,
  "creative-arts": creativeArtsContent,
  "pre-technical-studies": preTechnicalStudiesContent,
  "agriculture-and-nutrition": agricultureNutritionContent,
  "life-skills-and-values": lifeSkillsValuesContent,
  "religious-education": religiousEducationContent,
  "business-studies": businessStudiesContent,
  "health-education": healthEducationContent,
  "computer-studies": computerStudiesContent,
};
