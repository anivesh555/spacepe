import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Box } from "@mui/material";

import "./Registration.css";

// import { registerNewUser } from "../../store/user-actions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  roles: ["sde1"],
};
const Registration = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { firstName, lastName, email, username, password } = state;

  const handleChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(registerNewUser(state)).then((res) => {
    //   if (res) {
    //     setState(initialState);
    //     history.push("/login");
    //   }
    // });
  };

  return (
    <>

      <div class="split left">
        <div class="centered-signup">
          <div id="card" style={{ height: '525px' }}>
            <div id="card-content">

              <div id="textbox">
                <h2 class="alignleft">Sign Up</h2>
                <h2 class="alignright">SpacePe</h2>
              </div>


              <div>
                <p class="signup-msg">Sign Up with email address</p>
              </div>

              <Box
                component="form"
                onSubmit={handleSubmit}>

                <div style={{ display: 'flex' }}>
                  <div class="input-block" id="block1">
                    <label for="email" class="input-label">First Name</label>
                    <input name="firstName" placeholder="first name" id="login-username"
                      value={firstName}
                      onChange={handleChange}
                      data-testid="first-name"
                    />
                  </div>

                  <div class="input-block" id="block2">
                    <label for="email" class="input-label">Last Name</label>
                    <input name="lastName" placeholder="last name" id="login-lastname"
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="input-block">
                  <label for="email" class="input-label">Username</label>
                  <input name="username" placeholder="username" id="login-username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>

                <div class="input-block">
                  <label for="email" class="input-label">Email Address</label>
                  <input type="email" name="email" placeholder="email" id="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>

                <div class="input-block">
                  <label for="email" class="input-label">Password</label>
                  <input type="password" name="password" placeholder="password" id="login-password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>

                <button class="button-login" type="submit"
                  data-testid="submit-reg">Create Account</button>

              </Box>

              <div class="signin-div">
                <Link to="/login">Sign in</Link>
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <center> <img src={"https://spacepe.in/images/IT.png"} class='Logo' /> </center>
        </div>
      </div>


    </>
  );
};

export default Registration;
