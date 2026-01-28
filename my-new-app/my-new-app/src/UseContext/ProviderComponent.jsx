import React, { useState } from "react";
import ComponentX from './ComponentX'

export const snameContext = React.createContext();
export const marksContext = React.createContext();

const ProviderComponent = ()=>{
    const [sname, setsname] = useState('sathish')
    const [marks, setmarks] = useState(41)
    return(
        <div>
            <h1>This is the first provider component</h1>
            <snameContext.Provider value={sname}>
                <marksContext.Provider value={marks}>
                    <ComponentX/>
                </marksContext.Provider>
            </snameContext.Provider>
        </div>
    )
}
export default ProviderComponent