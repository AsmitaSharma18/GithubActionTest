import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard'; 
import { AuthProvider } from './auth/AuthContext'; 
 
const PrivateRoute = ({ children }: any) => { 
  const token = localStorage.getItem('token'); 
  return token ? children : <Navigate to="/" />; 
}; 
 
function App() { 
  return ( 
    <AuthProvider> 
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route 
            path="/dashboard" 
            element={ 
              <PrivateRoute> 
                <Dashboard /> 
              </PrivateRoute> 
            } 
          /> 
        </Routes> 
      </BrowserRouter> 
    </AuthProvider> 
  ); 
} 
 
export default App; 