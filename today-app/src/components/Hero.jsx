import heroImg from "../assets/hero-today@2x.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src={heroImg}
        alt="Worship at Faith Baptist Tabernacle"
      />
      <div className="hero-content">
        <div className="hero-badge">📍 You're at Faith Baptist</div>
        <h1>Welcome Home</h1>
        <p>
          So glad you're here today. Whether it's your first time or you've been
          with us for years — you belong.
        </p>
      </div>
    </section>
  );
}
