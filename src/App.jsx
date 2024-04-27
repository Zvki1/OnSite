import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import SideBar from "./components/SideBar/SideBar";
import Calendrier from "./pages/Calendrier";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Members from "./pages/Members";
import Project from "./pages/Project";
import { lazy, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";



function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(!!localStorage.getItem('token'))
  return (
   <BrowserRouter>
      <Routes>
      {isUserSignedIn ? (
        <>
         <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/documents" element={<Documents/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/addemploye" element={<Register />} />
       <Route path="*" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
        <Route path="/login" element={<Login />} />
        
        <Route path="*" element={<Navigate to="/login" />} />
        </>
        
      )}
       
      </Routes>

    </BrowserRouter>
  )
}

export default App
