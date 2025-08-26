import React, {useState} from 'react';
import api from '../api';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('buyer');

  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res = await api.post('/api/auth/login',{email,password,role});
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      alert('Login success');
      window.location.href='/' ;
    }catch(err){
      alert('Login failed: '+(err.response?.data?.message||err.message));
    }
  };

  return (
    <form onSubmit={onSubmit} className="card" style={{maxWidth:420, margin:'24px auto'}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{marginTop:8}}/>
      <select value={role} onChange={e=>setRole(e.target.value)} style={{marginTop:8}}>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button style={{marginTop:12}}>Login</button>
      <p style={{fontSize:12, color:'#6b7280', marginTop:8}}>Tip: Register via backend /api/auth/register first.</p>
    </form>
  );
}api.post
