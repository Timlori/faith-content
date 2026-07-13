import { firstTimeInfo } from "../data/content";

export default function FirstTime() {
  return (
    <section className="card">
      <div className="card-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <h2>{firstTimeInfo.title}</h2>
      </div>
      <p style={{ color: "var(--fg)", fontSize: 15, lineHeight: 1.7 }}>
        {firstTimeInfo.body}
      </p>
    </section>
  );
}
