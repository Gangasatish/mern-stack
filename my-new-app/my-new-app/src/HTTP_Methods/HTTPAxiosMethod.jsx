import axios from 'axios';
import React, {useState} from 'react';

const HTTPAxiosMethod = () => {

    const[users, setusers]=useState([]);
    const[resmsg, setresmsg]=useState('');
    const[errmsg, seterrmsg]=useState('');

    const FetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setusers(res.data))
    .catch(err=>console.log(err));
    }

    const FetchSingleData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/3')
        .then(res=>setusers([res.data]))
        .catch(err=>console.log(err));
    }

    const postData = () => {
        const newData = {
            userid: 300,
            username: "SatyamSE-19",
            email: "satyam@example.com"
        }
        axios.post('https://jsonplaceholder.typicode.com/users', newData)
        .then(res=>{
            console.log(res.data);
            setresmsg("Data posted successfully ");
            seterrmsg('');
        })
        .catch(err=>{
            console.log(err);
            seterrmsg("Error in posting data ");
            setresmsg('');

        })
    }
    

    return(
        <div>
            <button onClick={FetchData}>Fetch Data</button>
            <button onClick={FetchSingleData}>Fetch Single Data:</button>
            <button onClick={postData}>Post Data</button>
            <ul>
                {
                    [users.map((item)=>{
                        return(
                            <li key={item.id}>
                                Id: {item.id}<br></br>
                                Name: {item.name}<br></br>
                                UserName: {item.username}<br></br>
                                Email: {item.email}<br></br>
                            </li>
                        )
                    })]
                }
            </ul>
        </div>
    )
}
export default HTTPAxiosMethod;