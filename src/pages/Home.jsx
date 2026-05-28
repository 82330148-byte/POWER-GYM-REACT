import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <h2>Start Your Gym Journey</h2>
          <p>Train with us and improve your body step by step.</p>
          <Link to="/join" className="btn">Join Now</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="boxes">
          <div className="box">
            <h3>Good Equipment</h3>
            <p>Our gym has different machines and weights for many exercises.</p>
          </div>

          <div className="box">
            <h3>Helpful Coaches</h3>
            <p>The coaches can help beginners learn the correct way to train.</p>
          </div>

          <div className="box">
            <h3>Simple Plans</h3>
            <p>You can choose a plan that fits your time and your budget.</p>
          </div>
        </div>
      </section>

      <section className="about-home">
        <h2>Welcome to Power Gym</h2>
        <p>
          Power Gym is a place for people who want to become stronger and healthier.
          The site shows information about training, plans, courses, and contact details.
        </p>
      </section>

      <footer>
        <p>&copy; 2026 Power Gym. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;