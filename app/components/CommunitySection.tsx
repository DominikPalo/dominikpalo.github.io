import type { PageCopy } from "../content/copy";
import { CommunityCourse } from "./CommunityCourse";

type CommunitySectionProps = {
  t: PageCopy;
};

export function CommunitySection({ t }: CommunitySectionProps) {
  return (
    <section
      className="section community-section"
      id="community"
      aria-labelledby="community-title"
    >
      <div className="container">
        <div className="community-shell">
          <div className="community-copy">
            <p className="section-kicker">{t.communityKicker}</p>
            <h2 id="community-title">{t.communityTitle}</h2>
            <p>{t.communityBody}</p>
            <a
              className="button button-light"
              href="https://www.msba.sk"
              target="_blank"
              rel="noreferrer"
            >
              {t.communityCta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="community-console">
            <div className="console-header">
              <span>{t.communityConsole}</span>
              <span>NOVÁ CVERNOVKA</span>
            </div>
            {t.communityRoles.map(([role, detail], index) => (
              <div className="role-row" key={role}>
                <span className="role-index">0{index + 1}</span>
                <strong>{role}</strong>
                <span>{detail}</span>
                <i aria-hidden="true" />
              </div>
            ))}
            <div className="console-footer">
              <span>BRATISLAVA</span>
              <span>48°09&apos;N 17°06&apos;E</span>
            </div>
          </div>
        </div>

        <CommunityCourse
          id="course-title"
          label={t.communityCourseLabel}
          title={t.communityCourseTitle}
          body={t.communityCourseBody}
          facts={t.communityCourseFacts}
          audience={t.communityCourseAudience}
          href="https://msba.sk/elektro-dielna/zaklady-elektroniky/"
          cta={t.communityCourseCta}
        />

        <CommunityCourse
          id="electronics-club-title"
          label={t.communityKidsLabel}
          title={t.communityKidsTitle}
          body={t.communityKidsBody}
          facts={t.communityKidsFacts}
          audience={t.communityKidsAudience}
          href="https://msba.sk/elektro-dielna/elektro-kruzok/"
          cta={t.communityKidsCta}
        />

        <CommunityCourse
          id="modelling-course-title"
          label={t.communityModellingLabel}
          title={t.communityModellingTitle}
          body={t.communityModellingBody}
          facts={t.communityModellingFacts}
          audience={t.communityModellingAudience}
          status={t.communityModellingStatus}
          upcoming
        />
      </div>
    </section>
  );
}
