import "./Plans.css";

function Plans() {
  return (
    <main className="plans-page">
      <section className="section">
        <h2 className="title">Beginner Plan</h2>
        <p className="text">
          This plan is for people who are new to the gym. They can train three days per week
          and learn the basic exercises slowly.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Weight Loss Plan</h2>
        <p className="text">
          This plan uses cardio exercises and simple weight training. It also needs good food
          and less junk food.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Muscle Plan</h2>
        <p className="text">
          This plan is for people who want to build muscle. The person should train with weights
          and eat enough protein during the day.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Food Plan</h2>
        <p className="text">
          A simple food plan can include eggs, chicken, rice, potatoes, oats, vegetables, and water.
          It is better to avoid too much sugar.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Rest</h2>
        <p className="text">
          Rest is important because the body needs time to recover. Sleeping well helps the body
          become stronger after training.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Progress</h2>
        <p className="text">
          Results do not come in one day. The best way is to train every week, eat well, and keep
          going without stopping.
        </p>
      </section>

      <footer>
        <p>&copy; 2026 Power Gym. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default Plans;