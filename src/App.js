import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import ShowDetails from './pages/ShowDetails';

function App() {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} setProgress={setProgress} pageSize={pageSize} />
          <Route path='/showdetails' element={<ShowDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
