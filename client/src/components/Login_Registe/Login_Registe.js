import "./Login_Registe.css";

import { useNavigate } from "react-router-dom";

const Login_Registe = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (email.value === "admin" && password.value === "admin") {
      localStorage.setItem("user", "admin");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (email.value === "admin" && password.value === "admin") {
      localStorage.setItem("user", "admin");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleForm = (e) => {
    console.log("handleForm", e);
    navigate("/account/stiling_credit_information");
  };

  //
  return (
    <div className="main">
      <div className="input-form">
        <h1>Login</h1>
        <br />
        <form action={handleForm()}>
          <div className="input-div">
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              aria-describedby="email-help"
              placeholder="Enter email"
            />
            <small id="email-help">It's safe with us. We hate spam!</small>
          </div>
          <div className="input-div">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="input-div">
            <label for="terms">
              <input type="checkbox" id="terms" />
              <span>
                I accept the{" "}
                <a href="https://www.example.com"> terms and conditions</a>
              </span>
            </label>
          </div>
          <div className="input-div">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="input-form">
        <h1>Registe</h1>
        <br />
        <form action={handleForm()}>
          <div className="input-div">
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              aria-describedby="email-help"
              placeholder="Enter email"
            />
            <small id="email-help">It's safe with us. We hate spam!</small>
          </div>
          <div className="input-div">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <div className="input-div">
            <label for="first_name">first name</label>
            <input
              type="text"
              id="first_name"
              aria-describedby="email-help"
              placeholder="Enter your first name"
            />
            <small id="email-help">It's safe with us. We hate spam!</small>
          </div>
          <div className="input-div">
            <label for="last_name">Last name</label>
            <input type="text" id="last_name" placeholder="last name" />
          </div>
          <div className="input-div">
            <label for="gender">gender</label>
            <select>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <div className="input-div">
            <label for="terms">
              <input type="checkbox" id="terms" />
              <span>
                I accept the{" "}
                <a href="https://www.example.com"> terms and conditions</a>
              </span>
            </label>
          </div>
          <div className="input-div">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login_Registe;
