import './App.css';
import Main from './Layouts/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Main/>} />
      </Routes>
  </Router>
  );
}

export default App;
