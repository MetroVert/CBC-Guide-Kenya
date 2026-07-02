import { useParams } from "wouter";
import { subjectRegistry } from "../data/subjects/registry";
import SubjectPageLayout from "../components/subject/SubjectPageLayout";
import SubjectComingSoon from "./SubjectPage";

export default function SubjectDetailPage() {
  const params = useParams<{ subject: string }>();
  const slug = params.subject ?? "";
  const content = subjectRegistry[slug];

  if (content) {
    return <SubjectPageLayout content={content} />;
  }

  return <SubjectComingSoon />;
}
