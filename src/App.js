import { use, useEffect, useState } from 'react';
import { getPosts } from './api'; 
import PostCard from './components/PostCard';
import './App.css';

function App() {

  const [data,setData]=useState(null);
  useEffect(()=>{
    getPosts().then(posts => setData(posts));
  },[]);
  return (
    <div className="App">
      {
        data ? data.map(e=> <PostCard title={e.title} body={e.body}/>):<p>No Data</p>
      }
    </div>
  );
}

export default App;
