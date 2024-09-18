import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4"
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8"
import Page9 from "./components/Page9";
import Main_Page from "./components/Main_Page";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import FP from "./pages/FP";
import "./styles/Transitions.css"; // Import your custom transitions

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterandLogout() {
  localStorage.clear();
  return <Register />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="slide"
        timeout={2000} // Duration of your transition
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/forgot-password" element={<FP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path = "/page1" element={<Page1/>}/>
          <Route path = "/page2" element={<Page2/>}/>
          <Route path = "/page3" element={<Page3/>}/>
          <Route path = "/page4" element={<Page4/>}/>
          <Route path = "/page5" element={<Page5/>}/>
          <Route path = "/page6" element={<Page6/>}/>
          <Route path = "/page7" element={<Page7/>}/>
          <Route path = "/page8" element={<Page8/>}/>
          <Route path = "/page9" element={<Page9/>}/>
          <Route path ="/mp" element = {<Main_Page/>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;