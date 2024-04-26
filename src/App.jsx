import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import SideBar from "./components/SideBar/SideBar";
import Calendrier from "./pages/Calendrier";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Members from "./pages/Members";
import Project from "./pages/Project";
import { lazy } from "react";
import Home from "./pages/Home";


function App() {
 
  return (
   <BrowserRouter>
   <div className="flex w-screen h-screen  ">
      <SideBar />
      <Routes >
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/documents" element={<Documents/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/project" element={<Project/>} />
       
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
