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
        <Route path="/home" element={<Main/>} />
      </Routes>
      <Routes>
        <Route path="/book" element={<BookingPage/>} />
      </Routes>
  </Router>
  );
}

export default App;
