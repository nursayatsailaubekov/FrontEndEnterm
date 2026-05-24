import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyCarsPage = ({ cars, deleteCar, updateCar }) => {
  const { user } = useContext(AuthContext);
  
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  const myCars = cars.filter(car => car.owner === user.username);

  const startEdit = (car) => {
    setEditingId(car.id);
    setFormData(car);
  };

  const handleSave = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/cars/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const updated = await response.json();
      updateCar(updated);
      setEditingId(null);
    } catch (err) {
      console.error("Save error details:", err);
      alert("Save error: Make sure the server is running!");
    }
  };

  return (
    <div className="my-cars-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h2>My Cars</h2>
      <div className="my-cars-list">
        {myCars.length === 0 ? (
          <p>You haven't added any posts yet.</p>
        ) : (
          myCars.map(car => {
            const isEditing = editingId === car.id;

            return (
              <div 
                key={car.id} 
                className="car-card-horizontal"
                style={isEditing ? { height: 'auto', minHeight: '200px', overflow: 'visible' } : {}}
              >
                {isEditing ? (
                  <div className="card-content-wrapper" style={{ flex: 1, gap: '15px' }}>
                    <div className="edit-form-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label style={{ fontSize: '12px', color: '#aaa', marginBottom: '-5px' }}>Brand Name</label>
                      <input 
                        type="text" 
                        className="edit-input" 
                        placeholder="Brand"
                        value={formData.brand || ''} 
                        onChange={(e) => setFormData({...formData, brand: e.target.value})} 
                      />
                      
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '12px', color: '#aaa' }}>Price ($)</label>
                          <input 
                            type="number" 
                            className="edit-input" 
                            placeholder="Price"
                            value={formData.price || ''} 
                            onChange={(e) => setFormData({...formData, price: Number(e.target.value)})} 
                            style={{ width: '95%' }}
                          />
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '12px', color: '#aaa' }}>Year</label>
                          <input 
                            type="number" 
                            className="edit-input" 
                            placeholder="Year"
                            value={formData.year || ''} 
                            onChange={(e) => setFormData({...formData, year: Number(e.target.value)})} 
                            style={{ width: '95%'}}
                          />
                        </div>
                      </div>

                      <label style={{ fontSize: '12px', color: '#aaa', marginBottom: '-5px' }}>Description</label>
                      <textarea 
                        className="edit-input"
                        placeholder="Car description..."
                        value={formData.description || ''}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        style={{  resize: 'none', padding: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#222', color: '#fff' }}
                      />
                    </div>
                    
                    <div className="edit-form-actions" style={{ display: 'flex', gap: '10px', marginTop: '10px', paddingBottom: '5px' }}>
                      <button className="btn-save" onClick={() => handleSave(car.id)} style={{ padding: '10px 20px', backgroundColor: '#2ecc71', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Save</button>
                      <button className="btn-cancel" onClick={() => setEditingId(null)} style={{ padding: '10px 20px', backgroundColor: '#e74c3c', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
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
                        <div className="card-actions-btns" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <button onClick={() => startEdit(car)} className="button-85">Edit</button>
                          <button onClick={() => deleteCar(car.id)} className="delete-btn" style={{ padding: '0.6em 1.5em', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyCarsPage;