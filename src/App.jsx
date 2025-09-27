import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './pages/Menu';




function App() {
  return (
    <Router>
     
      
      <Routes>
       
        <Route path="/" element={<Home/>} />
         <Route path="/services" element={<Services/>} />
          <Route path="/videoes" element={<Menu />} />
       
       
         
       
      </Routes>
      
     
      
    </Router>
  );
}

// Helper component to conditionally render Footer
function ConditionalFooter() {
  const location = useLocation();
  const hideFooterOnRoutes = ["/adm/auth/login","/adm/msgs"]; // Add all paths where you want to hide the footer

  if (hideFooterOnRoutes.includes(location.pathname)) {
    return null; // Don't render the footer
  }

  return <Navbar />; // Render the footer
}


function ConditionalHeader() {
  const location = useLocation();
  const hideFooterOnRoutes = ["/adm/auth/login","/adm/msgs"]; // Add all paths where you want to hide the footer

  if (hideFooterOnRoutes.includes(location.pathname)) {
    return null; // Don't render the footer
  }

  return <Navbar/>; // Render the footer
}

export default App;
