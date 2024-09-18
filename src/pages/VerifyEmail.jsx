import React from "react";
import Verify from "../components/Verify"
export default function VerifyEmail() {
  return (
    <div>
      <Verify route="/api/v1/auth/verify-email/" method ="verify" />
    </div>
  )
}