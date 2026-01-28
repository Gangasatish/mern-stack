import React, { useState } from "react";
import ModeGetter from './ModeGetter'
export const modeContext = React.createContext();
const ModeProvider = () =>{
    const [mode, setmode] = useState('light');
    return(
        <div>
            <modeContext.Provider value={{mode,setmode}}>
                <ModeGetter/>
            </modeContext.Provider>
        </div>
    )
}

export default ModeProvider