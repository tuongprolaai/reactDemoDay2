import { Form, TextInput } from "@/components/Forms";

const styles = {
  wrapper: { margin: 20 },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 20,
  },
};
function Forms() {
  const initValues = {
    email: "",
    password: "",
    address: "Phu Yen",
  }

  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div style={StyleSheet.wrapper}>
      <h1 style={styles.heading}>Forms Demo</h1>
      <Form initValues={initValues} onSubmit={handleSubmit}>
        <TextInput
          name="email"
          placeholder="Enter email..."
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Enter password..."
        />
        <TextInput
          name="address"
          placeholder="Enter address..."
        />
      <button>Login</button>
      </Form>
    </div>
  );
}

export default Forms;
