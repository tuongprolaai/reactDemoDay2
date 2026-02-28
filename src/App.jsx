import Button from "./components/Button";
import AppRoutes from "./components/AppRoutes";

import styles from "./App.module.scss";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Button rounded>Rounded</Button>
      <Button bordered>Bordered</Button>
      <Button href="https://google.com">Google</Button>
      <Button primary size="small">
        Small
      </Button>
      <Button primary size="large">
        Large
      </Button>
      <Button className={styles.customBtn} primary size="large">
        Custom
      </Button>

      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
