export default function Analytics({ cars }) {
  if (!cars || cars.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>📊 Advanced Analytics</h2>
        <p>There is no data to analyze. Add first car!</p>
      </div>
    );
  }

  const total = cars.length;

  const avgPrice =
    cars.reduce((sum, car) => sum + Number(car.price), 0) / cars.length;

  const newestCar = cars.reduce((a, b) =>
    a.year > b.year ? a : b
  );

  const oldestCar = cars.reduce((a, b) =>
    a.year < b.year ? a : b
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Advanced Analytics</h2>

      <p>Total Cars: {total}</p>
      <p>Average Price: ${avgPrice.toFixed(2)}</p>

      <h3>Newest Car</h3>
      <p>{newestCar.brand} ({newestCar.year}) </p>
      {newestCar.image && <img src={newestCar.image} alt={newestCar.brand} className="car-image"/>}

      <h3>Oldest Car</h3>
      <p>{oldestCar.brand} ({oldestCar.year})</p>
      {oldestCar.image && <img src={oldestCar.image} alt={oldestCar.brand} className="car-image"/>}
    </div>
  );
}