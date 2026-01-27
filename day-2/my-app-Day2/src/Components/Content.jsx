import React from "react";

const Content = ({ alias, name, age }) => {
    return (
        <>
        <div>Name:{name}</div>
        <div>Alias:{alias}</div>
        <div>Age:{age}</div>
        </>
    )
}
export default Content;