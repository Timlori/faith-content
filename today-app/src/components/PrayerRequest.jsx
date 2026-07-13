import { useState } from "react";

export default function PrayerRequest() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!request.trim()) return;
    setSent(true);
    console.log("Prayer request:", { name: name.trim() || "Anonymous", request: request.trim() });
  }

  if (sent) {
    return (
      <section className="prayer-section">
        <h2>We're Praying for You</h2>
        <p>Thank you. Your request has been received — we're praying for you.</p>
        <div className="prayer-success">
          Your prayer request has been shared with our prayer team.
        </div>
      </section>
    );
  }

  return (
    <section className="prayer-section">
      <h2>How Can We Pray for You?</h2>
      <p>We'd love to stand with you. Share your prayer request and our team will lift it up.</p>
      <form className="prayer-form" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)" autoComplete="name" />
        <textarea value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Share your prayer request…" required />
        <button type="submit">Send Prayer Request</button>
      </form>
    </section>
  );
}
