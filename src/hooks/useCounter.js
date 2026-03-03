import { useState } from "react";

function useCounter() {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    return [counter, increase];
}

export default useCounter;
