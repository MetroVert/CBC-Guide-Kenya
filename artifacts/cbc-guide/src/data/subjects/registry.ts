import type { SubjectContent } from "../../types/subject";
import { mathematicsContent } from "./mathematics";

export const subjectRegistry: Record<string, SubjectContent> = {
  mathematics: mathematicsContent,
};
