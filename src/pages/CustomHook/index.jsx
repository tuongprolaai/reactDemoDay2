import { useCounter } from "../../hooks";

const CustomHook = () => {
    const [counter, increase] = useCounter();
    return <button onClick={increase}>Increase ({counter})</button>;
};

export default CustomHook;
