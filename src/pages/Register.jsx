import React from 'react'
import RegisterForm from "../components/RegisterForm"
export default function Register() {
  return (
    <div> 
      <RegisterForm route ="/api/v1/auth/signup/" method ="signup" />
    </div>
  )
}