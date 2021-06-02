import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import './Signup.css'
const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json'
}

const SignupForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    email: "",
    rank: 0,
    showPassword: false
  }) 


  const handleShow = () => {
      setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleDownValue = (event) => {
    event.preventDefault();
  };

  const handleValueChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

    return (
      <div className="form-container">
        <form className="signup-form" >
          <h3>Signup</h3>
          <InputLabel className='username'>
            {/* Enter a Username */}
          </InputLabel>
          <Input
            type={values.username ? "text" : "username"}
            name="username"
            placeholder="Enter Username"
            className="input-text"
            onChange={handleValueChange("username")}
            value={values.username}
          />
          <InputLabel htmlFor="standard-adornment-email" className='email'>
            {/* Enter an email */}
          </InputLabel>
          <Input
            type={values.email ? "text" : "email"}
            name="email"
            placeholder="Enter Email Address"
            className="input-text"
            onChange={handleValueChange("email")}
            value={values.email}
          />
          <InputLabel htmlFor="standard-adornment-password">
            {/* Enter a Password */}
          </InputLabel> 
          <br/>
          <Input 
            type={values.showPassword ? "text" : "password"}
            onChange={handleValueChange("password")}
            name="password" 
            placeholder="Set Password..." 
            className="input-text"
            value={values.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  onClick={handleShow} 
                  onMouseDown={handleDownValue}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            />
            <br/>
          <input type="submit" name="submit" value="Signup" className="submit"/>
        </form>
      </div>
    );
      
}

export default SignupForm;