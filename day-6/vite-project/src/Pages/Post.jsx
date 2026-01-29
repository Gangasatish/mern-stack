/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// https://jsonplaceholder.typicode.com/posts

const Post = () => {
    // const {id} = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const fetchData = async () => {
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const data = await res.json();
        setPost(data);
        setIsLoading(false);
    }
    useEffect(() => {

        fetchData();

    }, [])
    // const handleDisplay = () => {
    //     console.log(post);

    // }


    return (
        <>
            {/* <button className='displayBtn' onClick={handleDisplay}>Display</button> */}
            {isLoading && <div className='loading'>Content is Loading...</div>}

            <div className='cards'>
                {post.map((post) => (
                    <div key={post.id} className="card">
                        <div><span className='labels'>Id: </span>{post.id}</div>
                        <div>
                            <span className='labels'>Title: </span>{post.title}</div>
                        <div><span className='labels'>Body: </span>{post.body}</div></div>
                ))}
            </div>

            {/* {!isLoading && <div className="cards">
                <div className="card">
                    <div><span className='labels'>Id: </span>{post.id}</div>
                    <div>
                    <span className='labels'>Title: </span>{post.title}</div>
                    <div><span className='labels'>Body: </span>{post.body}</div></div>
            </div>} */}

        </>
    )
}

export default Post