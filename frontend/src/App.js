import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import UserOnboard from './components/UserOnboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/user-onboarding" element={<UserOnboard />} /> 
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
