import React from "react";
import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    let userName = "Alice";

    const [name, setName] = useState("Lobinha")

    const changeNames = () => {
        userName = "Noleto"
        setName("Alice Lobo")
    };

    // 2 - useState e input
    const [age, setAge] = useState(18)

    //funções para eventos Handle
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age);
    }
    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes</button>
            {/* 2 - useState e input */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}/>
                <input type="submit" text="Enviar" /> 
            </form>
            
            <p>Você tem {age} anos!</p>

            <hr />
        </div>
        
    );
}

export default HookUseState
