import React, {Component, useContext, useState} from "react";
const WithoutUseContext = () =>{
    const [subject, setsubject] = useState("react")
    return(
        <div>
            <h1>This is the first component and passing subject ad property to 2nd component</h1>
            <ComponentA subject = {subject}/>
        </div>
    )
}

const ComponentA = ({subject})=>{
    return(
        <div>
            <h2>This iss ComponentA and receiving the property from WithoutUseContext</h2>
            <ComponentB subject = {subject}/>
        </div>
    )
}

const ComponentB = ({subject})=>{
    return(
        <div>
            <h2>This iss Component A and receiving the property from Component A</h2>
            <h2>Hello, Iam studying the subject : {subject}</h2>
            
        </div>
    )
}
export default WithoutUseContext