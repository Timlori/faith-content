import { church } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <div className="church-name">{church.name}</div>
      <div className="church-addr">{church.address}</div>
      <div className="church-links">
        <a href={church.fullSiteUrl} target="_blank" rel="noopener noreferrer">Visit Full Site</a>
        <a href={church.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} {church.name} · Every generation, verse by verse.
      </div>
    </footer>
  );
}
