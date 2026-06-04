import { scrollToSection } from "../../shared/utils/ScrollToSection";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background" />
      <div className="container">
        <header className="hero-copy">
          <h1 className="hero-identity">Inji</h1>
          <div className="hero-tagline">
            <p>Thoughtful systems.</p>
            <p>Deliberate experiences.</p>
          </div>
          <button
            className="hero-cta"
            onClick={() => scrollToSection("projects")}
          >
            View selected work &rarr;
          </button>
        </header>
      </div>
    </section>
  );
}

export default Hero;
