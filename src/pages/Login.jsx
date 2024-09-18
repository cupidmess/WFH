import React from "react";
import LoginForm from "../components/LoginForm";
function Login() {
  return (
    <div>
      <LoginForm route ="/api/token/" method ="login" />
    </div>
    
  )
}
export default Login; 