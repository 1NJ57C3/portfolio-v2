function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About</h2>
        <p className="about-thesis">
          Building software that remains understandable as it grows.
        </p>
        <div className="about-body">
          <p>
            Most projects start simply. Over time, requirements change, systems
            evolve, and decisions that once seemed obvious begin revealing
            tradeoffs.
          </p>
          <p>
            My work primarily focuses on modern web applications, though I'm
            generally more interested in systems than technologies. Whether I'm
            designing an interface, organizing a codebase, or evaluating an
            architectural decision, I'm usually looking for the same thing:
            coherence.
          </p>
          <p>
            The projects here reflect that approach. They're less a showcase of
            tools and more a record of problems, constraints, decisions, and the
            systems that emerged from them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
