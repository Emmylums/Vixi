import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';



function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <ScrollToTopButton/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
