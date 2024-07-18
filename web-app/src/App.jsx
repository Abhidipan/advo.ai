// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './utils/AuthContext';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route  path="/register" element={<Register/>}/>

          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<HomePage />}/>
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
