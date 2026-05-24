import { useState } from "react";

function AddCarForm({ addCar }) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!brand || !price || !year || !image || !description) {
      alert("Please fill all fields, including description");
      return;
    }

    addCar({
      id: Date.now().toString(),
      brand,
      price: Number(price),
      year: Number(year),
      image,
      description
    });

    // Очистка формы
    setBrand("");
    setPrice("");
    setYear("");
    setImage("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="card-content-wrapper" style={{ flex: 1, gap: '15px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Post your car</h3>
      
      <div className="edit-form-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <label style={{ fontSize: '12px', color: '#aaa', marginBottom: '-5px' }}>Brand Name</label>
        <input
          type="text"
          className="edit-input"
          placeholder="Brand (e.g. Toyota Camry)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '12px', color: '#aaa' }}>Price ($)</label>
            <input
              type="number"
              className="edit-input edit-input-price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ width: '100%', height: '36px', padding: '0 10px', boxSizing: 'border-box', minHeight: '36px' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontSize: '12px', color: '#aaa' }}>Year</label>
            <input
              type="number"
              className="edit-input edit-input-price"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              style={{ width: '100%', height: '36px', padding: '0 10px', boxSizing: 'border-box', minHeight: '36px' }}
            />
          </div>
        </div>

        <label style={{ fontSize: '12px', color: '#aaa', marginBottom: '-5px' }}>Description</label>
        <textarea 
          className="edit-input"
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write something about the car (condition, features, specs)..."
          required
          style={{ height: '100px', resize: 'none', padding: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#222', color: '#fff' }}
        />
      </div>

      <div className="image-upload-group" style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '5px' }}>
        <label style={{ fontSize: '12px', color: '#aaa' }}>Add car image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ color: '#aaa', fontSize: '14px' }}
        />
        {image && (
          <div style={{ marginTop: '10px', height: '80px', borderRadius: '5px', overflow: 'hidden', width: '120px' }}>
            <img src={image} alt="Preview" style={{ width: '100%', height: '100%' }} />
          </div>
        )}
      </div>

      <div className="edit-form-actions" style={{ display: 'flex', marginTop: '10px' }}>
        <button type="submit" className="button-85" style={{ width: '100%', margin: 0 }}>
          Post
        </button>
      </div>

    </form>
  );
}

export default AddCarForm;