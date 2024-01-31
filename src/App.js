import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import Navbar from 'scenes/navbar';

function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
         <CssBaseline/>
        <Routes>
          <Route path='/' exact element={<LoginPage/>} />
          <Route path='/home' element={ isAuth ? <HomePage/> : <Navigate to="/"/>} />
          <Route path='/profile/:userId' element={ isAuth ? <ProfilePage/> : <Navigate to="/"/>} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
