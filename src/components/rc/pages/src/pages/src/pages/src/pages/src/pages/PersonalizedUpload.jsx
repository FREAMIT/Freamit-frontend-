import React, {useState} from 'react';

export default function PersonalizedUpload(){
  const [file,setFile]=useState(null);
  return (
    <div className="card" style={{maxWidth:520, margin:'0 auto'}}>
      <h2>Upload Your Photo</h2>
      <input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0])}/>
      {file && <img alt="preview" style={{marginTop:12, width:'100%', borderRadius:10}} src={URL.createObjectURL(file)}/>}
      <button style={{marginTop:12}} onClick={()=>alert('Mock upload complete!')}>Upload</button>
    </div>
  );
}
