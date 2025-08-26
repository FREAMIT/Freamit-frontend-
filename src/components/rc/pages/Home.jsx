import React, {useEffect, useState} from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';

export default function Home(){
  const [products,setProducts]=useState([]);
  const [seller,setSeller]=useState('');

  useEffect(()=>{
    api.get('/api/products', { params: seller?{sellerId:seller}:{}}).then(res=>setProducts(res.data)).catch(()=>setProducts([]));
  },[seller]);

  return (
    <div>
      <div className="flex" style={{justifyContent:'space-between', marginBottom:12}}>
        <h2>Latest Frames</h2>
        <div className="flex">
          <input placeholder="Filter by sellerId" value={seller} onChange={e=>setSeller(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-4">
        {products.map(p=>(<ProductCard key={p._id} p={p} onAdd={()=>alert('Added to cart (demo)')} />))}
      </div>
    </div>
  );
}
