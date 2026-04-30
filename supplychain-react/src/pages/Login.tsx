import { useState } from 'react'; 
import { useAuth } from '../auth/AuthContext'; 
import { useNavigate } from 'react-router-dom'; 
 
export default function Login() { 
  const { login } = useAuth(); 
  const navigate = useNavigate(); 
 
  const [form, setForm] = useState({ 
    username: '', 
    password: '' 
  }); 
 
  const handleChange = (e: any) => { 
    setForm({ ...form, [e.target.name]: e.target.value }); 
  }; 
 
  const handleSubmit = async (e: any) => { 
    e.preventDefault(); 
 
    try { 
      await login(form); 
      navigate('/dashboard'); 
    } catch (err) { 
      console.error(err); 
    } 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <input name="username" onChange={handleChange} placeholder="Username" /> 
      <input name="password" type="password" onChange={handleChange} placeholder="Password" /> 
      <button type="submit">Login</button> 
    </form> 
  ); 
} 