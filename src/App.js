import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReservationCar from "./Annonce/ReservationCar";
import "./App.css";
import BookingPage from "./BookingPage/BookingPage";
import MainBooking from "./BookingPage/MainBooking";
import Main from "./Layouts/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BookingLayout from "./Layouts/BookingLayout";
import DashboardAdmin from "./components/DashboardAdmin";
import CarsAdmin from "./components/CarsAdmin";
import AddCarsAdmin from "./components/AddCarsAdmin";
import EditCarsAdmin from "./components/EditCarsAdmin";
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/book/:id" element={<BookingLayout />} />

          <Route path="/filter/:cat" element={<MainBooking />} />

          <Route path="/filter" element={<MainBooking />} />

          <Route path="/" element={<Main />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/cars" element={<CarsAdmin />} />
          <Route path="/admin/add" element={<AddCarsAdmin />} />
          <Route path="/admin/cars/:id" element={<EditCarsAdmin />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
