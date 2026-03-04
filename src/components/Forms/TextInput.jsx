import { useContext } from "react";
import styles from "./Forms.module.scss";
import Context from "./Context";

function TextInput({ label, name, ...passProps }) {
  const { formValues, handleChange } = useContext(Context);
  return (
    <div>
      <label className={styles.textInputWrapper}>
        <span className={styles.label}>{label}</span>
        <input
          {...passProps}
          className={styles.textInput}
          name={name}
          value={formValues[name]}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default TextInput;
