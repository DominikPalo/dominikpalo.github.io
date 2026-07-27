type CourseFact = readonly [value: string, label: string];

type CommunityCourseProps = {
  id: string;
  label: string;
  title: string;
  body: string;
  facts: readonly CourseFact[];
  audience: string;
  href?: string;
  cta?: string;
  status?: string;
  upcoming?: boolean;
  expandLabel: string;
  collapseLabel: string;
};

export function CommunityCourse({
  id,
  label,
  title,
  body,
  facts,
  audience,
  href,
  cta,
  status,
  upcoming = false,
  expandLabel,
  collapseLabel,
}: CommunityCourseProps) {
  return (
    <details
      className={`community-course-feature${upcoming ? " community-course-feature--upcoming" : ""}`}
      aria-labelledby={id}
    >
      <summary className="community-course-summary">
        <span className="community-course-label">{label}</span>
        <h3 id={id}>{title}</h3>
        <div className="community-course-preview">
          {facts.map(([value]) => (
            <strong key={value}>{value}</strong>
          ))}
        </div>
        <span className="community-course-toggle">
          <span className="community-course-expand">{expandLabel}</span>
          <span className="community-course-collapse">{collapseLabel}</span>
          <i aria-hidden="true" />
        </span>
      </summary>

      <div className="community-course-detail">
        <p className="community-course-body">{body}</p>
        <div className="community-course-facts">
          {facts.map(([value, factLabel]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{factLabel}</span>
            </div>
          ))}
        </div>
        <p className="community-course-audience">{audience}</p>
        {href && cta && (
          <a
            className="button button-secondary"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {cta} <span aria-hidden="true">↗</span>
          </a>
        )}
        {status && (
          <p className="community-course-status">
            <span aria-hidden="true" />
            {status}
          </p>
        )}
      </div>
    </details>
  );
}
