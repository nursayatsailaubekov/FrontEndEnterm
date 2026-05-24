import React, { useContext } from 'react';
import AddCarForm from "../components/AddCarForm";
import { AuthContext } from '../context/AuthContext';

export default function AddCarPage({ addCar }) {
  const { user } = useContext(AuthContext);

  const handleSave = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, owner: user.username }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      addCar(data);
      alert("Car added successfully!");

    } catch (error) {
      console.error("Failed to save car:", error);
      
      alert("Failed to save. Make sure the server is running!");
    }
  };

  return <AddCarForm addCar={handleSave} />;
}