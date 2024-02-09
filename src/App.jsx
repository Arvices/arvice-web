import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// app views
import Splash from "./components/splash/splash.jsx";
import Login from "./components/login/login.jsx";
import SignUp from "./components/signup/signup.jsx";
import ManualSignup from "./components/ManualSignUp/ManualSignup.jsx";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail.jsx"
import AccountTypeSelect from "./components/AccountTypeSelect/AccountTypeSelect.jsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/manual-signup" element={<ManualSignup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/profile-info-step-one" element={<AccountTypeSelect />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
