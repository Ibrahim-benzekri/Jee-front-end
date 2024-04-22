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
            <Route path="/book/:id" element={<BookingPage/>} />

            <Route path="/filter/:cat" element={<MainBooking />} />

            <Route path="/filter" element={<MainBooking />} />

            <Route path="/" element={<Main />} />
          
            <Route path="/login" element={<Login />} />
          
            <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
