import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const { name, email, password1, password2, formData, onChange } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          name="password1"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
          name="password2"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
