export default function HomeDetails({ cars }) {
  return (
    <div>
      <h3>📌 Detailed Info</h3>

      {cars.map(car => (
        <div key={car.id}>
          <p><b>{car.brand}</b></p>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}