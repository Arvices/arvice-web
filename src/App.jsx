import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// app views
import Splash from "./components/splash/splash.jsx";
import Login from "./components/login/login.jsx";
import SignUp from "./components/signup/signup.jsx";
import ManualSignup from "./components/ManualSignUp/ManualSignup.jsx";
import ManualLogin from "./components/ManualLogin/ManualLogin.jsx";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail.jsx";
import {
  ProfileBuildStep1,
  ProfileBuildStep2,
  ProfileBuildStep3,
} from "./components/ProfileBuild/ProfileBuild.jsx";
import AppMainPage from "./components/AppMainPage/AppMainPage.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/manual-signup" element={<ManualSignup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/profile-build/step-1"
            element={<ProfileBuildStep1 />}
          ></Route>
          <Route
            path="/profile-build/step-2"
            element={<ProfileBuildStep2 />}
          ></Route>
          <Route
            path="/profile-build/step-3"
            element={<ProfileBuildStep3 />}
          ></Route>
          <Route path="/main" element={<AppMainPage />}></Route>
          <Route path="/manual-login" element={<ManualLogin />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
