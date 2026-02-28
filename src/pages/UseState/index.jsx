import { useEffect, useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // Callback duoc goi trong 2 tinh huong
    // 1. Khi component duoc mounted
    // 2. Khi component re-render va co it nhat 1 deps thay doi (so sanh nghiem ngat ===)
  }, []);
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      Counter is {counter}
    </button>
  );
}

export default UseState;
