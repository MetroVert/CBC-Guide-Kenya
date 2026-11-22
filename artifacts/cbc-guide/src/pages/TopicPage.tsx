import { Link } from "wouter";
import InteractiveLearningModule from "../components/subject/InteractiveLearningModule";
import { getTopicPages, type TopicPageEntry } from "../data/subjects/topicPages";
import "../components/subject/TopicPage.css";

export default function TopicPage({ page }: { page: TopicPageEntry }) {
  const siblings = getTopicPages(page.subject);
  const index = siblings.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? siblings[index - 1] : undefined;
  const next =
    index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined;
  const subjectHref = `/grades/grade-8/${page.subject}`;

  return (
    <>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <ol className="breadcrumb-list">
            <li>
              <Link href="/" className="breadcrumb-link">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              ›
            </li>
            <li>
              <Link href="/grades/grade-8" className="breadcrumb-link">
                Grade 8
              </Link>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              ›
            </li>
            <li>
              <Link href={subjectHref} className="breadcrumb-link">
                {page.subjectName}
              </Link>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              ›
            </li>
            <li>
              <span
                className="breadcrumb-link breadcrumb-link--active"
                aria-current="page"
              >
                {page.topicTitle}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <InteractiveLearningModule
        module={page.module}
        eyebrow={`Grade 8 ${page.subjectName} lesson`}
      />

      <div className="topic-nav">
        {prev && (
          <Link
            href={`${subjectHref}/${prev.slug}`}
            className="btn-back topic-nav-link"
          >
            ← {prev.topicTitle}
          </Link>
        )}
        <Link href={subjectHref} className="btn-back topic-nav-link">
          All {page.subjectName} topics
        </Link>
        {next && (
          <Link
            href={`${subjectHref}/${next.slug}`}
            className="btn-primary topic-nav-link"
          >
            {next.topicTitle} →
          </Link>
        )}
      </div>
    </>
  );
}