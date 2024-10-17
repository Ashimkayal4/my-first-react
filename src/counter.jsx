import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    function addNumber() {
        const newCount = count + 1;
        setCount(newCount)
    }
    function reduceNumber() {
        const newCount = count - 1;
        setCount(newCount)
    }

    const counterStyle = {
        border: '2px solid tomato',
        borderRadius: '15px',
        padding: '10px',
        margin: '10px',
        
    }
    
    return (
        <div style={counterStyle}>
            <h3>Counter : {count} </h3>
            <button onClick={addNumber}>Add</button>
            <button onClick={reduceNumber}>Reduce</button>
        </div>
    )
}