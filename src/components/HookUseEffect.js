import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const HookUseEffect = () => {
    // 1- useEffect, sem dependências

    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - array de deps. vazio
    useEffect(() => {
        console.log("Serei executadi apenas uma vez!");
    }, []);

    // 3 - item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        console.log("Sou executado apenas quando o anotherNumber muda");
    }, [anotherNumber]);

    const changeNumber = () => setAnotherNumber(anotherNumber + 1);
    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar!</button>

            <p>Another Number: {anotherNumber}</p>
            <button onClick={changeNumber}>Mudar anotherNumber</button>
            <hr />
        </div>
    )
}

export default HookUseEffect