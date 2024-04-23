import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import UserOnboard from './components/UserOnboard';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import NewHeader from './components/NewHeader/NewHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for UserOnboard and UserList */}
          <Route path="/user-onboarding" element={<><Header /><UserOnboard /></>} /> 
          <Route path="/user-list" element={<><Header /><UserList /></>} />
          {/* Route for Login and Signup */}
          <Route path="/login" element={<><NewHeader/><Login /></>}/>
          <Route path="/register" element={<><NewHeader/><Signup/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
