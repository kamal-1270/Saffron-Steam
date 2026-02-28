import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO CAROUSEL */}
      <section>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div
                className="d-flex align-items-center text-white text-center"
                style={{
                  height: "100vh",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1509042239860-f550ce710b93)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)",
                  }}
                ></div>

                <div className="container position-relative">
                  <h1 className="display-3 fw-bold mb-3">
                    Saffron & Steam Café
                  </h1>
                  <p className="lead mb-4">
                    Slow mornings. Warm coffee. Food made with memory.
                  </p>
                  <Link to="/menu" className="btn btn-warning btn-lg px-4">
                    Explore Menu
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div
                className="d-flex align-items-center text-white text-center"
                style={{
                  height: "100vh",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div className="carousel-overlay"></div>
                <div className="container position-relative">
                  <h1 className="display-3 fw-bold">Freshly Brewed Coffee</h1>
                  <p className="lead">Crafted with passion.</p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="d-flex align-items-center text-white text-center"
                style={{
                  height: "100vh",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div className="carousel-overlay"></div>
                <div className="container position-relative">
                  <h1 className="display-3 fw-bold">Comfort Food & Bakery</h1>
                  <p className="lead">Made with memory.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Story</h2>
          <p className="col-lg-8 mx-auto text-muted">
            Born in Mithapur, Patna, Saffron & Steam is a cozy corner where
            people gather over handcrafted coffee and fresh comfort food.
          </p>
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Signature Favourites</h2>

          <div className="row g-4">
            {[
              {
                title: "Saffron Latte",
                desc: "Espresso with saffron milk foam.",
                img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
              },
              {
                title: "Butter Croissant",
                desc: "Flaky and golden fresh bake.",
                img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
              },
              {
                title: "Masala Sandwich",
                desc: "Grilled comfort with chutney.",
                img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm h-100 hover-card">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body text-center">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#6f4e37" }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3">Visit Us Today</h3>
          <p className="mb-4">
            Experience warmth, flavor, and comfort in every cup.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Find Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
