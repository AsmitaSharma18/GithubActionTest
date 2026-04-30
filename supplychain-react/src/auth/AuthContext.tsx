import { createContext, useState, useContext } from 'react'; 
import api from '../api/axios'; 
 
const AuthContext = createContext<any>(null); 
 
export const AuthProvider = ({ children }: any) => { 
  const [user, setUser] = useState(null); 
 
  const login = async (data: any) => { 
    const res = await api.post('/Auth/login', data); 
 
    localStorage.setItem('token', res.data.accessToken); 
    setUser(res.data); 
 
    return res; 
  }; 
 
  return ( 
    <AuthContext.Provider value={{ user, login }}> 
      {children} 
    </AuthContext.Provider> 
  ); 
}; 
 
export const useAuth = () => useContext(AuthContext); 