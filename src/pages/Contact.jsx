import "./Contact.css";

function Contact() {
  function handleSendMessage(event) {
    event.preventDefault();
    alert("Message sent successfully!");
  }

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-title">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <span></span>
        </div>

        <div className="contact-container">
          <div className="contact-card">
            <h2>Contact Information</h2>

            <div className="info-box">
              <h3>Phone</h3>
              <p>81028521</p>
            </div>

            <div className="info-box">
              <h3>Email</h3>
              <p>yehyanaserdine@gmail.com</p>
            </div>

            <div className="info-box">
              <h3>Private Coaches</h3>
              <p><b>Omar:</b> 70898543</p>
              <p><b>Email:</b> omarh@gmail.com</p>
              <p><b>Ali:</b> 71223456</p>
              <p><b>Email:</b> alih@gmail.com</p>
            </div>
          </div>

          <form className="contact-card" onSubmit={handleSendMessage}>
            <h2>Send Message</h2>

            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;