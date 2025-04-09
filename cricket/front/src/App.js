import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import T20 from "./components/T20";
import LiveCricketMarket from './components/Matches'
// import CricketSession from "./scenes/CricketSession";


const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#21CBF3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/cricket/market" element={<LiveCricketMarket/>} />
          <Route path="/session/resultdeclaration" element={<T20 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App; 