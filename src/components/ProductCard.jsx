import React from 'react';
export default function ProductCard({p,onAdd}){
  return (
    <div className="card">
      <img src={p.image || 'https://via.placeholder.com/600x400?text=Frame'} alt={p.name} style={{width:'100%',height:160,objectFit:'cover',borderRadius:10}}/>
      <h3 style={{margin:'8px 0'}}>{p.name}</h3>
      <div className="flex" style={{justifyContent:'space-between'}}>
        <span className="badge">{p.category||'Frame'}</span>
        <b>₹{p.price?.toFixed?.(2) || p.price}</b>
      </div>
      <button style={{marginTop:10, width:'100%'}} onClick={()=>onAdd?.(p)}>Add to Cart</button>
    </div>
  );
}https://via.placeholder.com/600x400?text=Framep.name
