import { useState } from "react";
import menuData from "../data/menuData";
function Menu() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div style={{ backgroundColor: "#f8f5f2", minHeight: "100vh" }}>
      {/* HEADER */}
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #6f4e37, #c97a40)",
        }}
      >
        <h1 className="display-4 fw-bold">Our Menu</h1>
        <p className="lead">Fresh • Artisan • Handcrafted</p>
      </div>

      <div className="container py-5">
        {/* CATEGORY TABS */}
        <div className="text-center mb-5">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "8px 22px",
                  margin: "8px",
                  borderRadius: "30px",
                  border: "2px solid #6f4e37",
                  backgroundColor: isActive ? "#6f4e37" : "transparent",
                  color: isActive ? "#fff" : "#6f4e37",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isActive
                    ? "0 6px 15px rgba(111, 78, 55, 0.3)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "#6f4e37";
                    e.target.style.color = "#fff";
                    e.target.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#6f4e37";
                    e.target.style.transform = "translateY(0)";
                  }
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* MENU GRID */}
        <div className="row g-4 fade-in">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card premium-card h-100 border-0 shadow-sm">
                {/* IMAGE */}
                <div className="position-relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  {/* Bestseller Badge Example */}
                  {index === 0 && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
                      Bestseller
                    </span>
                  )}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-muted small flex-grow-1">{item.desc}</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price-text">₹{item.price}</span>

                    <button className="btn btn-dark btn-sm px-3 rounded-pill">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
