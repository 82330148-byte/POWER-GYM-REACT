import { Link } from "react-router-dom";
import "./Course.css";

function Course() {
  return (
    <main className="course-page">
      <section className="course-container">
        <h1>Online Private Courses</h1>
        <p className="course-intro">
          Choose the private online course plan that fits your training goal.
        </p>

        <div className="course-cards">
          <div className="course-card">
            <h2>Private Course</h2>
            <p className="course-price">$100</p>
            <p>One month private online gym course.</p>
            <Link to="/join" className="btn">Pay</Link>
          </div>

          <div className="course-card">
            <h2>Private Course</h2>
            <p className="course-price">$1000</p>
            <p>One year private online gym course.</p>
            <Link to="/join" className="btn">Pay</Link>
          </div>
        </div>
      </section>

      <section className="course-banner">
        <h2>Power Gym</h2>
      </section>
    </main>
  );
}

export default Course;