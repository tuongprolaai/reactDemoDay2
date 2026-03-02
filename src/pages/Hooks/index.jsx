import { useEffect, useRef, useState } from "react";

function Hooks() {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);

    return (
        <div>
            {show && <input type="text" ref={inputRef} />}
            <button onClick={() => setShow(!show)}>Toggle</button>
            <button
                onClick={() => {
                    console.log(inputRef.current);
                }}
            >
                Log
            </button>
        </div>
    );
}

export default Hooks;
