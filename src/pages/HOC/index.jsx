import { useState } from "react";

function withCounter(Component) {
  const WrappedComponent = () => {
    const [counter, setCounter] = useState(0);
    return (
      <Component
        counter={counter}
        increase={() => setCounter(counter + 1)}
      ></Component>
    );
  };
  return WrappedComponent;
}

const MyComponent = withCounter(({ counter, increase }) => {
  return (
    <div>
      <button onClick={increase}>Increase ({counter})</button>
    </div>
  );
});

function HOC() {
  return (
    <div>
      <h1>HOC</h1>
      <MyComponent />
    </div>
  );
}

// Higher Order Component

export default HOC;
