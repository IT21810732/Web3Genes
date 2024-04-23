import './App.css';
import Header from './components/Header';
import UserOnboard from './components/UserOnboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/user-onboarding" element={<UserOnboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
