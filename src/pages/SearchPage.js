import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import { useState, useMemo } from "react";

export default function SearchPage({ cars }) {
  const [search, setSearch] = useState("");

  const filteredCars = useMemo(() => {
    return cars.filter(car =>
      car.brand.toLowerCase().includes(search.toLowerCase())
    );
  }, [cars, search]); 

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      {filteredCars.map(car => (
        <CarCard key={car.id} car={car} variant="horizontal" />
      ))}
    </div>
  );
}