import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// app views
import Splash from "./components/splash/splash.jsx";
import Login from "./components/login/login.jsx";
import SignUp from "./components/signup/signup.jsx";
import ManualSignup from "./components/ManualSignUp/ManualSignup.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/manual-signup" element={<ManualSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
