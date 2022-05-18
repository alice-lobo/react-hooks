import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
    const ref = useRef;

    useEffect(() => { //chamado tda vez q altera
        ref.current = value;
    });

    return ref.current;
}