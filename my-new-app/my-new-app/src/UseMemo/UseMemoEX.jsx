import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const[count,setCount]=useState(0);
    const [theme,setTheme]=useState('light')

    const changeCount = () =>{
        setCount(pre=>pre+1);
    }
    const changeTheme = () =>{
        setTheme((theme)=>theme=='light'?'dark':'light')
    }


    const complexCalculation = useMemo(() =>{
        let i=0;
        while(i<100000000){
            i++;
        }
        return count*2;
    },[count])

  return (
    <div>
        <h2>Count:{count}</h2>
        <h2>Multiplication by 2 : {complexCalculation}</h2>
        <button onClick={changeCount}>Change Count</button>
      <h2>Theme : {theme}</h2>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default UseMemoExample