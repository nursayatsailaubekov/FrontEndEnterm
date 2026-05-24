import { useState , useContext, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import { NavLink } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Home from "./pages/Home";
import AddCarPage from "./pages/AddCarPage";
import SearchPage from "./pages/SearchPage";
import Analytics from "./pages/Analytics";
import HomeDetails from "./pages/HomeDetails";
import StatsPage from "./pages/StatsPage";
import ThemeToggle from "./components/ThemeToggle";
import Login from './pages/Login';
import Register from './pages/Register';
import MyCarsPage from "./pages/MyCarsPage";
import CarDetails from "./pages/CarDetails";

function App() {
const [cars, setCars] = useState([]);

const { user, logout } = useContext(AuthContext);

const addCar = (newCar) => {
  setCars(prevCars => [...prevCars, newCar]); 
};

const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);


const updateCar = (updatedCar) => {
  setCars(cars.map(car => (car.id === updatedCar.id ? updatedCar : car)));
};

useEffect(() => {
    setLoading(true);
    setError(null); 
    
    fetch('http://localhost:5000/cars')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data from server');
        return res.json();
      })
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  

  const deleteCar = (id) => {
    fetch(`http://localhost:5000/cars/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Could not delete the car');
        setCars(cars.filter(car => car.id !== id));
      })
      .catch(err => {
        alert("Delete failed: " + err.message);
      });
  };


  if (error) {
    return (
      <div>
        <h2>Oops! Something went wrong.</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }


  return (
        <div>
          <nav className="navbar">
            <h2 className="logo">AutoMarket</h2>
            <div className="links">
              <NavLink to="/">Home</NavLink>
              
              <NavLink to="/search">Search</NavLink>
              <NavLink to="/analytics">Analytics</NavLink>            
              <NavLink to="/add">Add Car</NavLink>
              <NavLink to="/my-cars">My Cars</NavLink>
              {user ? (
                  <button onClick={logout} className="logout-btn">Logout ({user.username})</button>
                  ) : (
              <NavLink to="/login">Login / Register</NavLink>
              )}
            </div>
            <ThemeToggle />
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home cars={cars} />}>
              <Route path="stats" element={<StatsPage cars={cars} />} />
              <Route path="details" element={<HomeDetails cars={cars} />} />
            </Route>
            <Route path="/my-cars" element={
              <ProtectedRoute>
                <MyCarsPage cars={cars} deleteCar={deleteCar} updateCar={updateCar}/>
              </ProtectedRoute>
              } />
            <Route path="*" element={<div><h1>404: Page Not Found</h1></div>} />
            <Route path="/add" element={
              <ProtectedRoute>
                <AddCarPage addCar={addCar} />
              </ProtectedRoute>
            } />

            <Route path="/analytics" element={
                <Analytics cars={cars} />
            } />

            <Route path="/cars/:id" element={<CarDetails cars={cars} />} />
            <Route path="/search" element={<SearchPage cars={cars} />} />
          </Routes>
        </div>
  );
}
export default App;

