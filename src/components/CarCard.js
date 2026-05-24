import { Link } from 'react-router-dom';

export default function CarCard({ car, variant = 'vertical' }) {
  if (variant === 'horizontal') {
    return (
      <div className="car-card-horizontal">
        <div className="card-image-wrapper">
          <img src={car.image} alt={car.brand} />
        </div>
        <div className="card-content-wrapper">
          <div className="card-header-info">
            <h3>{car.brand}</h3>
            <span className="card-year">{car.year} y.</span>
          </div>
          <p className="card-description">
            {car.description || "No description provided for this vehicle."}
          </p>
          <div className="card-footer-info">
            <span className="card-price">${car.price.toLocaleString()}</span>
            <Link to={`/cars/${car.id}`} className="button-85">View Details</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="car-card-vertical">
      <div className="card-vertical-img-container">
        <img src={car.image} alt={car.brand} />
      </div>
      <div className="card-vertical-content">
        <h3>{car.brand}</h3>
        <div className="card-vertical-details">
          <span>{car.year} y.</span>
          <span className="price">${car.price.toLocaleString()}</span>
        </div>
        <Link to={`/cars/${car.id}`} className="button-85">View Details</Link>
      </div>
    </div>
  );
}