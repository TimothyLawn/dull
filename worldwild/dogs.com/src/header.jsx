
export default function Header({product}) {
  return (
    <>
      <header className="shop-header">
        <h1>Happy Tails Dog Shop</h1>
        <p>Your one-stop shop for all things dog!</p>
      </header>

      <nav className="shop-nav">
        <a href="#products">{product}</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="products" className="shop-section">
        <h2>Our Products</h2>
        <div className="products">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1d3a3cd" alt="Dog Food" />
            <h3>Dog Food</h3>
            <p>$20.0</p>
          </div>
          {/* more items... */}
        </div>
      </section>

      {/* repeat for other sections */}
    </>
  );
}
