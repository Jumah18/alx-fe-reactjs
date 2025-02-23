import { useState } from "react";


function Counter(){
    const [count, setCount]= useState(0);

    return (
        <>
        <div>
            <p>Current count is {count}</p>
            <button onClick={() => setCount (count + 1)} style={{ fontWeight: "bolder", fontSize: '20px'}}>+ </button>
            <button onClick={() => setCount (count- 1 )} style={{fontWeight : "bolder", fontSize : '20px'}}>- </button>
            <button onClick={() => setCount(0)} style={{ fontWeight: "bolder", fontSize: '20px'}}>Reset</button>
        </div>
        </>
    )
}


export default Counter;


  