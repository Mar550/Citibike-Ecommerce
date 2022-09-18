import React,{useState, useEffect} from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaGooglePlus} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { login } from '../../features/serverCalls';

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
    .then(response => {
      navigate('/');
    })
  }

  return (  
      <div className="container">
      <div className="login-container">
        <img id="image" src="" alt='mySvgImage' />
          <div className="login-info-container">
            <h1 className="title"> ADMIN LOGIN </h1>
            <form className="inputs-container" >
                <input 
                className="input" 
                type="text" 
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)} />

                <input 
                className="input" 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)} />
              
                <button className="btn" onClick={handleSumbit} > Access Dashboard </button>
            </form>
            <div className="subcontainer">
                <p> or you can use </p>
                <div className="icones">
                  <BsFacebook/>
                  <AiFillTwitterCircle/>
                  <BsGithub/>
                  <FaGooglePlus/>
                </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Login;