function About() {
  return (
    <div style={{ backgroundColor: "#f8f5f2" }}>

      {/* HERO */}
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #6f4e37, #c97a40)"
        }}
      >
        <h1 className="display-4 fw-bold">About Saffron & Steam</h1>
        <p className="lead mb-0">
          Where coffee meets comfort
        </p>
      </div>

      <div className="container py-5">

        {/* STORY SECTION */}
        <div className="row align-items-center mb-5">

          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
              alt="Cafe"
              className="img-fluid"
              style={{
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
            />
          </div>

          <div className="col-lg-7">
            <h2
              className="fw-bold mb-3"
              style={{
                color: "#6f4e37",
                fontSize: "32px"
              }}
            >
              Our Story
            </h2>

            <p className="text-muted">
              Started in 2022, Saffron & Steam was created to bring warmth
              and handcrafted coffee culture back to Patna. We believe
              coffee is not just a drink — it’s an experience.
            </p>

            <p className="text-muted">
              Every cup we serve is made with care, passion, and a focus
              on quality ingredients sourced locally.
            </p>

            {/* Stats */}
            <div className="row mt-4 text-center">
              <div className="col-4">
                <h4 className="fw-bold" style={{ color: "#6f4e37" }}>
                  3+
                </h4>
                <small className="text-muted">Years Serving</small>
              </div>
              <div className="col-4">
                <h4 className="fw-bold" style={{ color: "#6f4e37" }}>
                  5000+
                </h4>
                <small className="text-muted">Happy Customers</small>
              </div>
              <div className="col-4">
                <h4 className="fw-bold" style={{ color: "#6f4e37" }}>
                  50+
                </h4>
                <small className="text-muted">Menu Items</small>
              </div>
            </div>

          </div>

        </div>

        {/* FEATURES SECTION */}
        <div className="row text-center g-4 mt-4">

          {[
            { icon: "🌿", title: "Fresh Ingredients", text: "Locally sourced produce and dairy." },
            { icon: "☕", title: "Slow Crafted", text: "Every cup brewed with patience." },
            { icon: "🤝", title: "Community First", text: "A place to gather and connect." }
          ].map((item, index) => (
            <div key={index} className="col-12 col-md-4">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  transition: "0.3s",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div className="mb-3" style={{ fontSize: "40px" }}>
                  {item.icon}
                </div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small">{item.text}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default About;