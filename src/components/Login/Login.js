import { useState } from "react";
import { useDispatch } from "react-redux";

import "./Login.css";
// import { authenticateUser } from "../../store/user-actions";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const callLogin = () => {
    console.log("authentication we need to do")
    // dispatch(authenticateUser(username, password));
  };

  return (
    <div className="login-container">

      <div class="split left">
        <div class="centered">
          <div id="card" style={{ height: '565px' }}>
            <div id="card-content">

              <div id="textbox">
                <h2 class="alignleft">Hi, Welcome back</h2>
                <h2 class="alignright">SpacePe</h2>
              </div>

              <p class="alignleft">Login into your account</p>

              <button type="button" class="login-with-google-btn">
                Sign in with Google
              </button>


              <div class="div-or">
                <p> <block>OR</block> </p>
              </div>

              <p class="text-signin">Sign in with email address</p>

              <div class="input-block">
                <label for="email" class="input-label">Email Address</label>
                <input type="email" name="email" placeholder="Email" value={username} id="login-username"
                  data-testid="login-username"
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div class="input-block">
                <label for="password" class="input-label">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} id="login-password"
                  data-testid="loginpwd" onChange={(e) => setPassword(e.target.value)}></input>
              </div>

              <div class="div-signup">
                <Link class="sign-up" data-testid="login-link" to="/register">Sign up</Link>
                <Link class="forgot-password" to="/forgot-password">Forgot Password</Link>
              </div>

              <button class="button-login" role="button" onClick={callLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <center> <img src={"https://spacepe.in/images/IT.png"} class='loginLogo' /> </center>
        </div>
      </div>


    </div>
  );
};

export default Login;
