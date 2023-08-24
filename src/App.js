import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import ProfilePage from './pages/user/Profile';
import { Context } from './context/Context';

function App() {
  return (
    <>
      <Router>
        <Context>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:userId' element={<ProfilePage />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Context>
      </Router>
    </>
  );
}

export default App;
