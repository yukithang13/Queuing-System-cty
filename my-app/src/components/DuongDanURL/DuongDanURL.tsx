import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "../Home/Login";
import Dashboard from ".././Dashboard/dashboard";
import ResetPass from "../Home/ResetPass";

function DuongDanURL(){
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 550);
      }, []);
   return(
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/resetpass" element={<ResetPass/>} />
    </Routes>
   )
}

export default DuongDanURL;