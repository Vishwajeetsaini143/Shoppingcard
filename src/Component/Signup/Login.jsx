import { useState } from "react";
import "./signup.css";
import { auth } from "../firebase/firebase";


const Login = ({setOpen}) => {
  
  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      console.log("result", result);

      alert("Login Successfully ", result.user.email);
      setOpen(false)
    } catch (error) {
      console.log("error", error.message);
      alert(error.message);
    }
    // setUser({email:"",password:""})
  };
  return (
    <div className="block">
      <form action="" onSubmit={handleSubmit} className="sign">
        <h1>LOGIN FORM</h1>

        <div className="signup">
          <label htmlFor="email">email-</label>
          <input
            type="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>

        <div className="signup">
          <label htmlFor="password">password-</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
            id="password"
          />
        </div>
        <div className="btn1">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
