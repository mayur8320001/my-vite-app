// src/App.js
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage'; // Adjust the path as necessary
import ProductsPage from './pages/ProductsPage';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';
import { Box } from '@mui/material';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogsPage from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogsDetailsPage';
// import CustomerSlider from './components/CustomersSlider';

// Mock Data
const mockData = [
  { name: "John Doe", in: 5, out: 3 },
  { name: "Jane Smith", in: 4, out: 2 },
  { name: "David Lee", in: 6, out: 1 },
  { name: "Emily Chen", in: 3, out: 4 },
];

// IT Solutions Component
const ITSolutions = () => (
  <Box sx={{ p: 3 }}>
    <h2>IT Solutions Page</h2>
    <p>Content for IT Solutions goes here.</p>
  </Box>
);


const App = () => {
  const [mode, setMode] = useState('dark');
  const videos = [
    '/videos/techNet.mp4',
    '/videos/TechnCircuit.mp4',
    '/videos/techWave.mp4',
    '/videos/tehc1.mp4',
  ];

  // Randomly select a video from the array
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
         {isHomePage && (
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'fixed', // Fixed to cover the entire viewport
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: -1, // Ensure it stays behind all content
            }}
          >
            <source src={randomVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Pass mode and toggleColorMode to Navbar */}
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />

        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/table" element={<TablePage data={mockData} />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/products" element={<ProductsPage />} /> 
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />}/>
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>  
        {/* <CustomerSlider/> */}
        <Footer />
      </Router>  
    </ThemeProvider>
  );
};

export default App;
   