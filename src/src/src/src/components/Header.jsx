import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();
  const isAuthed = !!localStorage.getItem('token');
  const role = localStorage.getItem('role') || 'buyer';
  const logout = ()=>{ localStorage.clear(); navigate('/'); };
  return (
    <header className="header">
      <div className="container flex" style={{justifyContent:'space-between'}}>
        <div className="flex" style={{gap:8}}>
          <Link to="/" style={{fontWeight:700, fontSize:20}}>Frameit</Link>
          <span className="badge">Photo Frames</span>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/upload-photo">Personalize</Link>
          {role==='seller' && <Link to="/seller">Seller</Link>}
          {role==='admin' && <Link to="/admin">Admin</Link>}
          {isAuthed ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
        </nav>
      </div>
    </header>
  );
}
