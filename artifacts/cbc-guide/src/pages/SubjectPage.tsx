import { Link, useParams } from "wouter";

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function SubjectPage() {
  const params = useParams<{ subject: string }>();
  const subjectTitle = slugToTitle(params.subject ?? "");

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
                {subjectTitle}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Coming soon body */}
      <section className="subject-placeholder" aria-labelledby="subject-placeholder-title">
        <div className="subject-placeholder-inner">
          <div className="subject-placeholder-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>

          <div className="subject-placeholder-tag">Coming Soon</div>

          <h1 id="subject-placeholder-title" className="subject-placeholder-title">
            {subjectTitle}
          </h1>

          <p className="subject-placeholder-text">
            We're putting together notes, exercises, and revision materials for{" "}
            <strong>{subjectTitle}</strong>. This content is being carefully aligned
            to the CBC Grade 8 learning outcomes — check back soon!
          </p>

          <div className="subject-placeholder-chips">
            {["Notes", "Practice Questions", "Past Papers", "Revision Guides"].map((chip) => (
              <span key={chip} className="subject-chip">{chip}</span>
            ))}
          </div>

          <Link href="/grades/grade-8" className="btn-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Grade 8
          </Link>
        </div>
      </section>
    </>
  );
}
