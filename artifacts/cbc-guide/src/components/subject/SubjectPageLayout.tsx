import { Link } from "wouter";
import type { ReactNode } from "react";
import type { SubjectContent, SubjectResourceItem } from "../../types/subject";
import { SUBJECT_COLOR_MAP } from "../../lib/subjectTheme";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const ARROW_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const SECTION_ICONS: Record<string, ReactNode> = {
  notes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>
    </svg>
  ),
  practice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  quizzes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
    </svg>
  ),
  downloads: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>
    </svg>
  ),
  videos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  ),
};

function ResourceSection({
  id,
  title,
  iconKey,
  items,
  colorKey,
}: {
  id: string;
  title: string;
  iconKey: keyof typeof SECTION_ICONS;
  items: SubjectResourceItem[];
  colorKey: SubjectContent["colorKey"];
}) {
  const c = SUBJECT_COLOR_MAP[colorKey];

  return (
    <section className="resource-section" id={id} aria-labelledby={`${id}-heading`}>
      <div className="resource-section-inner">
        <div className="resource-section-header">
          <div className="resource-section-icon" style={{ background: c.bg, color: c.icon }}>
            {SECTION_ICONS[iconKey]}
          </div>
          <h2 id={`${id}-heading`} className="resource-section-title">{title}</h2>
        </div>

        <div className="resource-grid">
          {items.map((item) => (
            <div key={item.title} className="resource-card">
              <div className="resource-card-top">
                <div className="resource-card-title">{item.title}</div>
                {item.meta && <span className="resource-badge">{item.meta}</span>}
              </div>
              <p className="resource-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SubjectPageLayout({ content }: { content: SubjectContent }) {
  const c = SUBJECT_COLOR_MAP[content.colorKey];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <ol className="breadcrumb-list">
            <li><Link href="/" className="breadcrumb-link">Home</Link></li>
            <li aria-hidden="true" className="breadcrumb-sep">›</li>
            <li><Link href="/grades/grade-8" className="breadcrumb-link">Grade 8</Link></li>
            <li aria-hidden="true" className="breadcrumb-sep">›</li>
            <li>
              <span className="breadcrumb-link breadcrumb-link--active" aria-current="page">
                {content.name}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Subject hero */}
      <section className="subject-hero" aria-labelledby="subject-hero-heading">
        <div className="subject-hero-inner">
          <div className="subject-hero-icon" style={{ background: c.bg, borderColor: c.border, color: c.icon }}>
            {content.icon}
          </div>
          <div className="subject-hero-tagline" style={{ color: c.icon }}>{content.tagline}</div>
          <h1 id="subject-hero-heading" className="subject-hero-name">{content.name}</h1>
          <p className="subject-hero-desc">{content.description}</p>

          <div className="subject-hero-stats">
            <div className="subject-hero-stat">
              <span className="subject-hero-stat-number" style={{ color: c.icon }}>{content.topics.length}</span>
              <span className="subject-hero-stat-label">Topics</span>
            </div>
            <div className="subject-hero-stat-divider" aria-hidden="true" />
            <div className="subject-hero-stat">
              <span className="subject-hero-stat-number" style={{ color: c.icon }}>{content.outcomes.length}</span>
              <span className="subject-hero-stat-label">Learning Outcomes</span>
            </div>
            <div className="subject-hero-stat-divider" aria-hidden="true" />
            <div className="subject-hero-stat">
              <span className="subject-hero-stat-number" style={{ color: c.icon }}>{content.videos.length}</span>
              <span className="subject-hero-stat-label">Video Lessons</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning outcomes */}
      <section className="outcomes-section" aria-labelledby="outcomes-heading">
        <div className="outcomes-inner">
          <h2 id="outcomes-heading" className="section-heading section-heading--left">Learning Outcomes</h2>
          <p className="section-sub section-sub--left">By the end of this subject, you will be able to:</p>
          <ul className="outcomes-list">
            {content.outcomes.map((outcome) => (
              <li key={outcome} className="outcome-item">
                <span className="outcome-check-icon" style={{ background: c.bg, color: c.icon }}>
                  <CheckIcon />
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Topics grid */}
      <section className="topics-section" aria-labelledby="topics-heading">
        <div className="topics-inner">
          <h2 id="topics-heading" className="section-heading section-heading--left">Topics Covered</h2>
          <p className="section-sub section-sub--left">A complete breakdown of what you'll study in {content.name}.</p>

          <div className="topics-grid">
            {content.topics.map((topic, idx) => (
              <div key={topic.title} className="topic-card">
                <div className="topic-number" style={{ background: c.bg, color: c.icon }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="topic-title">{topic.title}</div>
                  <p className="topic-desc">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResourceSection id="notes" title="Notes" iconKey="notes" items={content.notes} colorKey={content.colorKey} />
      <ResourceSection id="practice-questions" title="Practice Questions" iconKey="practice" items={content.practiceSets} colorKey={content.colorKey} />
      <ResourceSection id="quizzes" title="Quizzes" iconKey="quizzes" items={content.quizzes} colorKey={content.colorKey} />
      <ResourceSection id="downloads" title="Downloads" iconKey="downloads" items={content.downloads} colorKey={content.colorKey} />
      <ResourceSection id="video-lessons" title="Video Lessons" iconKey="videos" items={content.videos} colorKey={content.colorKey} />

      {/* FAQs */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-inner">
          <h2 id="faq-heading" className="section-heading section-heading--left">Frequently Asked Questions</h2>
          <div className="faq-list">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-question">
                  {faq.question}
                  <span className="faq-toggle-icon" aria-hidden="true">{ARROW_ICON}</span>
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="subject-back-wrap">
        <Link href="/grades/grade-8" className="btn-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Grade 8
        </Link>
      </div>
    </>
  );
}
