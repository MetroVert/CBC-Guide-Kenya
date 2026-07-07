import type { SubjectContent } from "../../types/subject";
import { mathematicsContent, englishContent } from "./mathematics";

export const subjectRegistry: Record<string, SubjectContent> = {
  mathematics: mathematicsContent,
  english: englishContent,
};
