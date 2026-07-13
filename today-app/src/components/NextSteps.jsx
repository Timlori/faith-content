import { nextSteps, church } from "../data/content";

export default function NextSteps() {
  return (
    <section className="card">
      <div className="card-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <h2>{nextSteps.title}</h2>
      </div>
      <p style={{ color: "var(--fg)", fontSize: 15, lineHeight: 1.7 }}>
        {nextSteps.body}
      </p>
      <div className="cta-group" style={{ marginTop: "var(--space-2)" }}>
        <a className="btn btn-primary btn-block" href={`mailto:${church.email}`}>Email Us</a>
        <a className="btn btn-green btn-block" href={`tel:${church.phone}`}>Call the Office</a>
      </div>
    </section>
  );
}
