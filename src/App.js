import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReservationCar from "./Annonce/ReservationCar";
import "./App.css";
import BookingPage from "./BookingPage/BookingPage";
import MainBooking from "./BookingPage/MainBooking";
import Main from "./Layouts/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
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
          <Route path="/home" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/book" element={<BookingPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
