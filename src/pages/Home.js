import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { Link, Outlet } from "react-router-dom";

export default function Home({ cars }) {
  const latestCars = cars ? cars.slice(-3).reverse() : [];

  return (
    <div className="home-page">
      <HeroBanner />
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Search</h3>
          <p>Find your dream car in seconds with our optimized smart filters.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Verified Sellers</h3>
          <p>Every account is securely registered and verified for your safety.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📉</div>
          <h3>Live Analytics</h3>
          <p>Track real-time market statistics and pricing dynamics instantly.</p>
        </div>
      </section>

      <section className="nested-navigation-section">
        <h2>Explore Market Statistics</h2>
        <nav className="homecss">
          <Link to="stats" className="nav-button">View Charts</Link> 
          <Link to="details" className="nav-button">Market Info</Link>
        </nav>
        <div className="nested-content">
          <Outlet />
        </div>
      </section>
      
      <section className="latest-section">
        <div className="section-header">
          <h2>Latest Arrivals</h2>
          <Link to="/search" className="see-all-link">See All Cars →</Link>
        </div>
        
        {latestCars.length > 0 ? (
          <div className="latest-cars-grid">
            {latestCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <p className="no-cars-msg">No cars available at the moment.</p>
        )}
      </section>

      <Footer />
    </div>
  );
}