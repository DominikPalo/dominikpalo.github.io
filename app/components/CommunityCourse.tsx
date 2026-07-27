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
}: CommunityCourseProps) {
  return (
    <article
      className={`community-course-feature${upcoming ? " community-course-feature--upcoming" : ""}`}
      aria-labelledby={id}
    >
      <div className="community-course-overview">
        <span className="community-course-label">{label}</span>
        <h3 id={id}>{title}</h3>
        <p>{body}</p>
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
    </article>
  );
}
