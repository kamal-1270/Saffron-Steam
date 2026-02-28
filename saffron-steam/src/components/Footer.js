import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email.");
      setMessage("");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    setMessage("🎉 Successfully Subscribed!");
    setError("");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <footer
      className="text-white pt-5"
      style={{
        background: "linear-gradient(135deg, #111, #2c2c2c)"
      }}
    >
      <div className="container">

        <div className="row g-5 pb-4">

          {/* Brand */}
          <div className="col-lg-4">
            <h4 className="fw-bold mb-3" style={{ color: "#c97a40" }}>
              Saffron & Steam
            </h4>
            <p className="text-light small">
              A modern café experience in the heart of Patna.
              Fresh ingredients, handcrafted coffee, and warm ambiance.
            </p>

            <div className="mt-3">
              <Link href="#" className="text-light me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="#" className="text-light me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </Link>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Opening Hours</h6>
            <ul className="list-unstyled small text-light">
              <li className="mb-2">Mon – Fri: 8:00 AM – 10:00 PM</li>
              <li className="mb-2">Saturday: 9:00 AM – 11:00 PM</li>
              <li>Sunday: 9:00 AM – 9:00 PM</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Stay Updated</h6>
            <p className="small text-light">
              Subscribe to get special offers & updates.
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="form-control"
                  style={{
                    borderRadius: "30px 0 0 30px",
                    padding: "10px"
                  }}
                />
                <button
                  type="submit"
                  style={{
                    borderRadius: "0 30px 30px 0",
                    backgroundColor: "#ffc107",
                    border: "none",
                    padding: "0 20px",
                    fontWeight: "600",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            {error && (
              <p style={{ color: "#ffb3b3", marginTop: "8px", fontSize: "14px" }}>
                {error}
              </p>
            )}

            {message && (
              <p style={{ color: "#90ee90", marginTop: "8px", fontSize: "14px" }}>
                {message}
              </p>
            )}
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small py-3 text-light">
          © 2026 Saffron & Steam Café | Designed with ❤️ in Patna
        </div>

      </div>
    </footer>
  );
}

export default Footer;