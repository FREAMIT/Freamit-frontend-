import React, {useState} from 'react';
import api from '../api';

export default function AddProduct(){
  const [form,setForm]=useState({ name:'', category:'Frame', image:'', price:0, isPersonalized:false });
  const submit=async(e)=>{
    e.preventDefault();
    try{
      const {data}=await api.post('/api/products', form);
      alert('Product added: '+data.name);
      window.location.href='/seller';
    }catch(err){
      alert('Failed: '+(err.response?.data?.message||err.message));
    }
  };
  return (
    <form className="card" onSubmit={submit} style={{maxWidth:520, margin:'0 auto'}}>
      <h2>Add Product</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Category" style={{marginTop:8}} onChange={e=>setForm({...form,category:e.target.value})}/>
      <input placeholder="Image URL" style={{marginTop:8}} onChange={e=>setForm({...form,image:e.target.value})}/>
      <input placeholder="Price" type="number" style={{marginTop:8}} onChange={e=>setForm({...form,price:Number(e.target.value)})}/>
      <label className="flex" style={{marginTop:8, gap:8}}><input type="checkbox" onChange={e=>setForm({...form,isPersonalized:e.target.checked})}/> Personalized</label>
      <button style={{marginTop:12}}>Save</button>
    </form>
  );
}api.postdata.name
