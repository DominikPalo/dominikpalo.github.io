import type { PageCopy } from "../content/copy";

type HobbiesSectionProps = {
  t: PageCopy;
};

export function HobbiesSection({ t }: HobbiesSectionProps) {
  return (
    <section
      className="section hobbies-section"
      id="hobbies"
      aria-labelledby="hobbies-title"
    >
      <div className="container">
        <div className="section-heading horizontal-heading hobbies-heading">
          <div>
            <p className="section-kicker">{t.hobbiesKicker}</p>
            <h2 id="hobbies-title">{t.hobbiesTitle}</h2>
          </div>
          <p>{t.hobbiesIntro}</p>
        </div>

        <div className="hobbies-grid">
          <article className="hobby-card ride-card">
            <div className="hobby-card-header">
              <span>{t.rideLabel}</span>
            </div>
            <div className="ride-visual" aria-hidden="true">
              <img
                className="motorcycle-outline"
                src="/motorcycle-outline-hairline.webp"
                alt=""
              />
            </div>
            <div className="hobby-content">
              <h3>{t.rideTitle}</h3>
              <p>{t.rideBody}</p>
              <div className="hobby-tags">
                {t.rideTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="hobby-card travel-card">
            <div className="hobby-card-header">
              <span>{t.travelLabel}</span>
            </div>
            <div className="travel-visual" aria-hidden="true">
              <img className="asia-map-outline" src="/asia-outline.png" alt="" />
              <span className="map-connection" />
              <i className="map-pin map-pin-west" />
              <i className="map-pin map-pin-central" />
              <i className="map-pin map-pin-east" />
              <div className="passport-stamp">
                <strong>ASIA</strong>
                <small>EXPLORED</small>
              </div>
              <span className="travel-coordinate">34.0479° N / 100.6197° E</span>
            </div>
            <div className="hobby-content">
              <h3>{t.travelTitle}</h3>
              <p>{t.travelBody}</p>
              <div className="hobby-tags">
                {t.travelTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
