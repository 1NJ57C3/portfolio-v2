import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About</h2>
          <p className="about-thesis">
            Building software that remains understandable as it grows.
          </p>
          <div className="about-body">
            <p>Most of my projects start with curiosity.</p>
            <p>
              A new technology. An unusual idea. A question I don't know the
              answer to yet.
            </p>
            <p>
              Sometimes that means designing interfaces. Sometimes it means
              rethinking architecture. More often, it means discovering that the
              original problem wasn't actually the interesting one.
            </p>
            <p>
              I'm drawn to the places where systems, design, and implementation
              overlap—not because they're separate disciplines, but because they
              rarely stay separate for long.
            </p>
            <p>
              Whether I'm building something new or untangling something old,
              I'm usually looking beneath the surface of the problem. Not just
              how something works, but why it works that way—and what happens
              when it changes.
            </p>
          </div>
        </div>
        <aside className="about-aside">
          <h3 className="about-aside-title">A Few Other Things</h3>
          <ul className="about-aside-list">
            <li>Bay Area based</li>
            <li>Gamer</li>
            <li>Perpetual overanalyzer</li>
            <li>Consumer of matcha, boba, coffee, and tea</li>
            <li>Curiosity has a tendency to snowball</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default About;
