import { useEffect, useState } from "react";

function Counter({ children }) {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  return children({ counter, increase });
}

function List({ data = [], children }) {
  return <ul>{data.map((item) => children({ item }))}</ul>;
}

const RenderProps = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div>
      <h1>RenderProps</h1>
      <List data={users}>{({ item }) => <li>{item .name}</li>}</List>
      <Counter>
        {({ counter, increase }) => (
          <button onClick={increase}>Increase ({counter})</button>
        )}
      </Counter>
    </div>
  );
};

export default RenderProps;
