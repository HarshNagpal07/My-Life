import { use, useEffect, useState } from 'react';
import { getPosts } from './api'; 
import './App.css';

function App() {

  const [data,setData]=useState(null);
  useEffect(()=>{
    getPosts().then(posts => setData(posts));
  },[]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
