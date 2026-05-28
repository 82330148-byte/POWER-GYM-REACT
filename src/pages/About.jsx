import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="section">
        <h2 className="title">About Power Gym</h2>
        <p className="text">
          Power Gym is a fitness website that helps users learn about gym training,
          online courses, gym plans, equipment, and healthy lifestyle information.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Our Goal</h2>
        <p className="text">
          Our goal is to help beginners start their gym journey in a simple way.
          The website gives clear information about training, plans, and registration.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Why This Website?</h2>
        <p className="text">
          This website is useful because it organizes gym services in one place.
          Users can view plans, calculate fitness information, contact the gym,
          and join easily.
        </p>
      </section>

      <footer>
        <p>&copy; 2026 Power Gym. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default About;