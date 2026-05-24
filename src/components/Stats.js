function Stats({ cars }) {

  const totalCars = cars.length;

  const avgPrice =
    cars.reduce((sum, car) => sum + Number(car.price), 0) /
    (cars.length);

  return (
    <div className="stats">
      <p>Total cars: {totalCars}</p>
      <p>Average price: ${Math.round(avgPrice)}</p>
    </div>
  );
}

export default Stats;