import React from "react";
import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {

    const [number, setNumber] = useState(0);
    //const premiumNumbers = ["0", "100", "200"];
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"];
    }, [])
     
    useEffect (() => {
        console.log("premiumNumbers foi alterado");
    }, [premiumNumbers]) //fazer algo qnd os premiumNumber for alterado
    
    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number)? <p>Acertou o número!</p>: ""}
            {console.log(premiumNumbers.includes(number))}
            <hr />
        </div>
    )
}
export default HookUseMemo;