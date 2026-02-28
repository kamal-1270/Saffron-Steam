import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Saffron & Steam Café</h1>
      <p>Slow mornings, warm coffee & food made with memory.</p>
      <Link to="/menu" className="btn">View Menu</Link>
    </section>
  );
}

export default Hero;