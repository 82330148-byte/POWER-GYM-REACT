import { useState } from "react";
import "./join.css";

function Join() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleRegister(event) {
    event.preventDefault();

    const hasCapital = /[A-Z]/.test(name);
    const onlyNumbers = /^[0-9]+$/.test(phone);

    if (!hasCapital) {
      alert("Name must have at least one capital letter");
    } else if (!onlyNumbers) {
      alert("Phone number must contain only numbers");
    } else {
      alert("Registration successful!");
      setName("");
      setPhone("");
    }
  }

  return (
    <main className="join-page">
      <div className="form-box">
        <h2>Join Power Gym</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit" className="back-btn">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

export default Join;