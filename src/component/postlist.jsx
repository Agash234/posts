import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Postlist = () => {
    const[post,setpost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=>setpost(data))
        .catch((error)=>console.error("Eror Fetching Posts:",error));
    },[])
  return (
    <div className="postlist">
        <h2>posts</h2>
        {post.length>0?(
            <ul>
                {post.map((post)=>(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`}>Read More</Link>
                    </li>
                ))}
            </ul>
        ):(
            <p>Loading Posts.....</p>
        
        )}
    </div>
  );
};

export default Postlist