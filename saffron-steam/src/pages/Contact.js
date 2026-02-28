function Contact() {
  return (
    <div style={{ backgroundColor: "#f8f5f2" }}>

      {/* HERO */}
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #6f4e37, #c97a40)"
        }}
      >
        <h1 className="display-4 fw-bold">Find Us</h1>
        <p className="lead mb-0">We’d love to hear from you</p>
      </div>

      <div className="container py-5">

        <div className="row g-5">

          {/* CONTACT INFO */}
          <div className="col-lg-5">

            {[
              { icon: "📍", title: "Address", text: "Fraser Road, Mithapur, Patna" },
              { icon: "📞", title: "Phone", text: "+91 8934567879" },
              { icon: "✉", title: "Email", text: "hello@saffronsteam.com" }
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 mb-4"
                style={{
                  backgroundColor: "#ffffffcc",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  transition: "0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 45px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.1)";
                }}
              >
                <h5 className="fw-bold mb-2">
                  {item.icon} {item.title}
                </h5>
                <p className="text-muted mb-0">{item.text}</p>
              </div>
            ))}

          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-7">
            <div
              className="p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <h4 className="fw-bold mb-4">Send a Message</h4>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd"
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd"
                    }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="form-control"
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #ddd"
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "30px",
                    border: "none",
                    fontWeight: "600",
                    background: "linear-gradient(135deg, #6f4e37, #c97a40)",
                    color: "#fff",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.9";
                    e.target.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* MAP */}
        <div
          className="mt-5 overflow-hidden"
          style={{
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
          }}
        >
          <div className="ratio ratio-16x9">
            <iframe
              src="https://maps.google.com/maps?q=patna&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;