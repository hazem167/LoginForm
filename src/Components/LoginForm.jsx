import  { useEffect, useState } from 'react';
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgress from '@mui/material/CircularProgress';


import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '../redux/LoginApiSlice';
import Logout from './Logout';
import AlertTap from './AlertTap';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state.LoginApi.status);
  const token = useSelector((state) => state.LoginApi.token);
  const errorMessage = useSelector((state) => state.LoginApi.error);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const User = { email, password };
    dispatch(loginUser(User));
  };
    
    
  if (token) {
    return <Logout />
  } else {
    return (<>
            {status === 'failed'?<AlertTap message={errorMessage.message} />:""}
          {status === 'loading' && <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            zIndex: "9999",
            background: "#ddd",
            borderRadius: " 10px",
            width: "100vw",
            height: "100vh",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}
          >
            <CircularProgress size={"70px"} />
      </div>}
    
          <div className="background-container">
            <div className="login-container">
              <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                  <input
                    type="email"
                    id="username"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <FontAwesomeIcon icon={faLock} className='icon'></FontAwesomeIcon>
                </div>
                <div className="options">
                  <label>
                    <input type="checkbox" /> Remember ME
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="login-button">Login</button>
                <p>
                  Dont have an account? <a href="#">Register</a>
                </p>
              </form>
            </div>
          </div>
         
        </>
        );
      }
    }
    export default LoginForm;
    
  
    
       
