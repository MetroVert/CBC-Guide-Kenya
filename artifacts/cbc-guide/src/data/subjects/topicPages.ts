import type { InteractiveLearningModule } from "../../types/subject";
import { cubesAndCubeRootsModule } from "./mathCubesTopic";

export interface TopicPageEntry {
  /** Subject slug, e.g. "mathematics" */
  subject: string;
  subjectName: string;
  /** Last part of the address, e.g. "cubes-and-cube-roots" */
  slug: string;
  /** Must match the topic card title on the subject page exactly */
  topicTitle: string;
  module: InteractiveLearningModule;
}

// Add one entry here for every finished topic. Order = Previous/Next order.
export const topicPages: TopicPageEntry[] = [
  {
    subject: "mathematics",
    subjectName: "Mathematics",
    slug: "cubes-and-cube-roots",
    topicTitle: "Cubes and Cube Roots",
    module: cubesAndCubeRootsModule,
  },
];

export function getTopicPages(subject: string): TopicPageEntry[] {
  return topicPages.filter((t) => t.subject === subject);
}

export function getTopicPage(
  subject: string,
  slug: string,
): TopicPageEntry | undefined {
  return topicPages.find((t) => t.subject === subject && t.slug === slug);
}