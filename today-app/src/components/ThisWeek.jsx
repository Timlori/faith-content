import { thisWeekEvents, church } from "../data/content";

export default function ThisWeek() {
  return (
    <section className="card">
      <div className="card-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <h2>This Week at FBT</h2>
      </div>
      <ul className="event-list">
        {thisWeekEvents.map((ev, i) => (
          <li className="event-item" key={i}>
            <div className="event-day">{ev.day}</div>
            <div className="event-detail">
              <div className="event-name">{ev.name}</div>
              <div className="event-time">{ev.time}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="giving-cta" onClick={() => window.open(church.givingUrl, "_blank")}>
        <span className="label">🙏 Online Giving</span>
        <span className="arrow">→</span>
      </div>
    </section>
  );
}
