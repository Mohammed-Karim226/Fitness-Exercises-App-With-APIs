
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './Routes/Home';
import ExerciseDetai from './Routes/ExerciseDetai';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetai />} />
        </Routes>
        <Footer />
      </Router>
    </Box>

  );
}

export default App;
