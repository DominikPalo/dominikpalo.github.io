import type { PageCopy } from "../content/copy";

type ContactFooterProps = {
  t: PageCopy;
  messageSent: boolean;
};

export function ContactFooter({ t, messageSent }: ContactFooterProps) {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div>
            <p className="section-kicker">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
          </div>
          <p>{t.contactBody}</p>
        </div>

        <div className="contact-channel">
          <div className="contact-channel-meta">
            <div>
              <span className="contact-channel-label">{t.contactFormLabel}</span>
              <strong>{t.contactFormEndpoint}</strong>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/4ff4fb7e953b3b7d36a5f267829c9a01"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Nová správa z palo.sk" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://palo.sk/?message=sent#contact"
            />
            <input type="hidden" name="_url" value="https://palo.sk/#contact" />

            <div className="contact-form-trap" aria-hidden="true">
              <label htmlFor="contact-company">Company website</label>
              <input
                id="contact-company"
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="contact-form-grid">
              <label className="contact-field">
                <span>{t.contactName}</span>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contactNamePlaceholder}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="contact-field">
                <span>{t.contactEmail}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contactEmailPlaceholder}
                  maxLength={200}
                  autoComplete="email"
                  required
                />
              </label>

              <label className="contact-field contact-field-wide">
                <span>{t.contactSubject}</span>
                <input
                  type="text"
                  name="subject"
                  placeholder={t.contactSubjectPlaceholder}
                  maxLength={160}
                  required
                />
              </label>

              <label className="contact-field contact-field-wide">
                <span>{t.contactMessage}</span>
                <textarea
                  name="message"
                  placeholder={t.contactMessagePlaceholder}
                  minLength={10}
                  maxLength={5000}
                  rows={7}
                  required
                />
              </label>
            </div>

            <div className="contact-form-footer">
              <button className="button button-primary" type="submit">
                {t.contactSend}
                <span aria-hidden="true">↗</span>
              </button>
            </div>

            {messageSent && (
              <p className="contact-form-success" role="status">
                <span aria-hidden="true">✓</span>
                {t.contactSuccess}
              </p>
            )}
          </form>
        </div>

        <div className="social-links">
          <a href="https://github.com/DominikPalo" target="_blank" rel="noreferrer">
            <span>01</span>
            {t.links.github}
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://www.linkedin.com/in/dpalo" target="_blank" rel="noreferrer">
            <span>02</span>
            {t.links.linkedin}
            <b aria-hidden="true">↗</b>
          </a>
          <a
            href="https://www.instagram.com/dominik.palo"
            target="_blank"
            rel="noreferrer"
          >
            <span>03</span>
            {t.links.instagram}
            <b aria-hidden="true">↗</b>
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dominik Paľo</span>
          <span>{t.footerNote}</span>
          <a href="#content">{t.footerTop}</a>
        </div>
      </div>
    </footer>
  );
}
