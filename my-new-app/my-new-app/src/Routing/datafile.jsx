import React from "react";

const Datafile = ()=>{
    const qparam =  new URLSearchParams(window.location.search)
    const name = qparam.get('name')
    const regno = qparam.get('regno')
    return (
        <div>
            <p>This is datafile page</p>
            <p>Name is : {name}</p>
            <p>Regno is : {regno}</p>
        </div>
    )
}
export default Datafile