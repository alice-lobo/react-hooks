import React from "react";
import { useRef } from "react";
/* eslint-disable */
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
    const componentRef  = useRef();
    return (
        <div>
            <h2>useImperativeHandle</h2>
            <SomeComponent ref={componentRef }/>
            <button onClick={()=> componentRef .current.validate()}>Validate</button>
        </div>
    )
}

export default HookUseImperativeHandle;