import ReservationCar from './Annonce/ReservationCar';
import './App.css';
import BookingPage from './BookingPage/BookingPage';
import MainBooking from './BookingPage/MainBooking';
import Main from './Layouts/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/book/:id" element={<BookingPage/>} />
        <Route path="/filter/:cat" element={<MainBooking />} />
        <Route path="/filter" element={<MainBooking />} />
      </Routes>
  </Router>
  );
}

export default App;
