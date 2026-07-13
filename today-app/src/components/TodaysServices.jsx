import { todaysServices } from "../data/content";

export default function TodaysServices() {
  return (
    <section className="card">
      <div className="card-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <h2>Today's Services</h2>
      </div>
      <table className="service-table">
        <tbody>
          {todaysServices.map((s, i) => (
            <tr key={i}><td>{s.name}</td><td>{s.time}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
