import {useReducer, useState} from "react";
import React from "react";

const HookUseReducer = () => {

    // 1- começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    // 2 - avançando no useReducer
    const initialTaks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"},
    ]

    const taskReducer = (state, action) => {};

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);
    const [taskText, setTaskText] = useState("");

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número!</button>

            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={(e) => setTaskText(e.target.value)} 
                    value={taskText}/>
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    );
};

export default HookUseReducer