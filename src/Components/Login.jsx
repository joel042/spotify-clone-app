import React from 'react'
import "../asserts/css/Login.css"
import image from "../asserts/images/Spotify_Full_Logo_RGB_White.png";
import { loginUrl } from './spotify';


const Login = () => {
  return (
    <>
      <div className='login'>
        <img  src={image} alt="img"></img>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    </>
  );
}

export default Login
