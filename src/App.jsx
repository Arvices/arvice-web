import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// app views
import Splash from './components/splash/splash.jsx';
import Login from './components/login/login.jsx';
import SignUp from './components/signup/signup.jsx';
import PhoneSignup from './components/PhoneSignup/PhoneSignup.jsx';


function App() {
  return (
    <>
      <Router>  
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/phone-signup' element={<PhoneSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
