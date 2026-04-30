import SearchBox from './SearchBox';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075')" }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag">🏠 Flat Management System</div>
        <h1 className="hero-title">
          Manage and Rent<br />Flats Easily
        </h1>
        <p className="hero-subtitle">
          A complete system to manage tenants, rent, and maintenance — all in one place.
        </p>
      </div>
      <div className="hero-search-wrapper">
        <SearchBox />
      </div>
    </div>
  );
}
