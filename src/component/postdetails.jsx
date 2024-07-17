import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Postdetails = () => {
    const{id}=useParams();
    const[post,setpost]=useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>response.json())
        .then((data)=>setpost(data))
        .catch((error)=>console.error("Eror Fetching Posts:",error));


    },[id]);
    if(!post)
{
 return <p>Loading post....</p>
}  
return (
    <div className="postdetails">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  );
};

export default Postdetails;