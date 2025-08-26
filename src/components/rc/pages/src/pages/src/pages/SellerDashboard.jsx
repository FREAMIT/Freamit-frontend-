import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function SellerDashboard(){
  const [mine,setMine]=useState([]);
  useEffect(()=>{ api.get('/api/products/mine').then(r=>setMine(r.data)).catch(()=>setMine([])); },[]);
  return (
    <div>
      <div className="flex" style={{justifyContent:'space-between', marginBottom:12}}>
        <h2>Seller Dashboard</h2>
        <Link to="/add-product">+ Add Product</Link>
      </div>
      {mine.length===0? <div className="card">No products yet.</div> :
        <table>
          <thead><tr><th>Name</th><th>Price</th><th>Personalized</th></tr></thead>
          <tbody>{mine.map(p=>(<tr key={p._id}><td>{p.name}</td><td>₹{p.price}</td><td>{p.isPersonalized?'Yes':'No'}</td></tr>))}</tbody>
        </table>
      }
    </div>
  );
}p.name
