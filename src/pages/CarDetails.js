import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CarDetails({ cars }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const car = cars.find(c => String(c.id) === String(id));

  if (!car) {
    return <div className="error-container"><h2>Car not found!</h2></div>;
  }

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to list
      </button>

      <div className="details-container">
        <div className="details-image-section">
          <img src={car.image} alt={car.brand} />
        </div>

        <div className="details-info-section">
          <span className="car-category">
            {car.price > 30000 ? 'Luxury Class' : 'Standard Class'}
          </span>
          <h1>{car.brand}</h1>
          
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Price</span>
              <span className="spec-value highlight">${car.price}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Year</span>
              <span className="spec-value">{car.year}</span>
            </div>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              {car.description}
            </p>
          </div>

          <button className="action-btn">Contact Seller</button>
        </div>
      </div>
    </div>
  );
}