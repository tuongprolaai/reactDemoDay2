import { Context as ThemeContext } from "@/contexts/ThemeContext";

const styles = {
  wrapper: { margin: 20 },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 20,
  },
};

function A() {
  return <B>A</B>;
}
function B() {
  return <C>B</C>;
}
function C() {
  return <div>
    <button onClick={window.toggleTheme}>Toggle</button>
  </div>;
}

function ContextAPI() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Forms Demo</h1>
      <A />
    </div>
  );
}

export default ContextAPI;
