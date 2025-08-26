import React, {useEffect,useState} from 'react';
import api from '../api';
export default function AdminDashboard(){
  const [orders,setOrders]=useState([]);
  useEffect(()=>{ api.get('/api/orders').then(r=>setOrders(r.data)).catch(()=>setOrders([])); },[]);
  return (
    <div>
      <h2>Admin • Orders Monitor</h2>
      {orders.length===0? <div className="card">No orders</div> :
        <table><thead><tr><th>#</th><th>User</th><th>Items</th><th>Status</th></tr></thead>
        <tbody>{orders.map(o=>(<tr key={o._id}><td>{o._id}</td><td>{o.user?.email}</td><td>{o.items?.length}</td><td>{o.status}</td></tr>))}</tbody></table>}
    </div>
  );
}
