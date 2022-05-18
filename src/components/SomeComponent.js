import React from "react";
import { useRef, forwardRef, useImperativeHandle } from "react";

const SomeComponent = forwardRef((props, ref) => {
    const localInputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            validate: () => {
                if (localInputRef.current.value.length > 3) {
                    localInputRef.current.value = "";
                }
            },
        };
    });

    return (
        <div>
            <h2>SomeComponent</h2>
            <p>Insira no máx 3 caracteres</p>
            <input type="text" ref={localInputRef} />
        </div>
    )
});

export default SomeComponent;