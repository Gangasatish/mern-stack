import React, { useEffect, useState } from "react";
const HTTPFetchMethod2 = () => {
  const [users, setusers] = useState([]);
  const [resMessage, setresMessage]= useState("");
  const [errMessage, seterrMessage] = useState("")
  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setusers(data.users);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const postData = ()=>{
    const newData = {
        id: 1,
        firstName: "Sathish",
        age: 19
    }
    fetch("https://dummyjson.com/users",{
        method: "POST",
        body:JSON.stringify(newData),
        headers: {"content-type":"application"}
    })
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error(`$res.status`)
        }
        return res.json()
    })
    .then(data=>{
        console.log("New data is: ",data)
        setresMessage("Post added successfully")
        seterrMessage("")
    })
    .catch(()=>{
        setresMessage("")
        seterrMessage("Post Not Updated Successfully")
    })
  }
  return (
    <div>
      <button type="submit" onClick={fetchData}>Fetch Data</button>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              Id: {item.id}
              <br />
              first Name: {item.firstName}
              <br />
              age: {item.age}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HTTPFetchMethod2;
