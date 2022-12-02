import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalState } from "./useLocalStorage";

const PrivateRoute = ({children}) => {
  const tokenLocal = localStorage.getItem("token");
 
  const [jwt, setJwt] = useLocalState("", "jwt");
  if(tokenLocal !== "")
  {
    console.log(tokenLocal);
  }
  else
  {
    return jwt ? children : <Navigate to='/' />
  }
};



export default PrivateRoute;