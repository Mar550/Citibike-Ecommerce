import React,{useState, useEffect} from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaGooglePlus} from 'react-icons/fa';

const Login = () => {

  return (
      <div className="container">
      <div className="login-container">
        <img id="image" src={require('../assets/register3.svg').default} alt='mySvgImage' />
          <div className="login-info-container">
            <h1 className="title"> LOGIN TO DASHBOARD  </h1>
            <form className="inputs-container" >
                <input 
                className="input" 
                type="text" 
                placeholder="E-mail"
                name="email" />

                <input 
                className="input" 
                type="password" 
                placeholder="Password"
                name="password"/>
              
                <button className="btn" type="submit"> Access Account </button>
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