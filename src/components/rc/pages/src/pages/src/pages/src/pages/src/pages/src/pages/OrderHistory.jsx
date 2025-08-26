import React, {useEffect,useState} from 'react';
import api from '../api';
export default function OrderHistory(){
  const [orders,setOrders]=useState([]);
  useEffect(()=>{ api.get('/api/orders/my').then(r=>setOrders(r.data)).catch(()=>setOrders([])); },[]);
  return (
    <div>
      <h2>My Orders</h2>
      {orders.length===0? <div className="card">No orders yet.</div> :
        <table><thead><tr><th>#</th><th>Items</th><th>Status</th></tr></thead>
        <tbody>{orders.map(o=>(<tr key={o._id}><td>{o._id}</td><td>{o.items?.length}</td><td>{o.status}</td></tr>))}</tbody></table>}
    </div>
  );
}
