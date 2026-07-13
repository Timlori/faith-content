import { sermon, church } from "../data/content";

export default function MessageForToday() {
  return (
    <section className="card">
      <div className="card-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
        <h2>Message for Today</h2>
      </div>
      <div className="message-body">
        <div className="sermon-title">"{sermon.title}"</div>
        <div className="sermon-series">{sermon.series} · {sermon.passage}</div>
        <div className="sermon-preacher">{sermon.preacher}</div>
        <p className="sermon-desc">{sermon.description}</p>
      </div>
      <div className="message-video" onClick={() => window.open(church.liveUrl, "_blank")}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span style={{ marginLeft: 8 }}>Watch this morning's sermon</span>
      </div>
    </section>
  );
}
