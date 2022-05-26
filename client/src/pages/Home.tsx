import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    axios.get("/api/posts")
    .then((res)=>setBlogs(res.data))
  },[])

  return (
    <div>
      <h1>Home</h1>
      <h2>{blogs}</h2>
    </div>
  )
}
