import React, { useEffect, useState } from "react";
const HTTPFetchMethod = () =>{
    const [posts, setposts] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        setposts(data);
    })
    }, [])
    
    return(
        <div>
            <ul>
                {
                    posts.map((item)=>{
                        return(
                        <li key={item.id}>
                            Id: {item.id}<br/>
                            User id: {item.userId}<br/>
                            Title: {item.title}<br/>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default HTTPFetchMethod