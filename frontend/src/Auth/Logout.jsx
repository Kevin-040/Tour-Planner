import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";

export default function Logout({setToken,setIsLoggedIn,isLoggedIn}){
    const navigate = useNavigate();
    
    const handleLogout= ()=>{
      setToken('')
      localStorage.removeItem("Token")
      setIsLoggedIn(false)
      window.alert("Logout Successfully! ")
      navigate("/")
    }
    
    if (isLoggedIn) {
      return(<><button onClick={handleLogout}>Logout</button></>);
    }
     else {
      return(<><Link to="/" state={{ status:{setIsLoggedIn}}}>Login/Signup</Link></>);
    }
    
    // return<>
    // <Link to="/signup">
    //     Login</Link></>
    
}