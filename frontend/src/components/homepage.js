import React, {Component} from 'react';
import {Link , Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage.css';
import foodImg from '../images/food.png';

export class Homepage extends React.Component{

render()
{

return (
    <div>
    <div className="container">
    <h1 className="block title is-5">
      Healthy Habits
    </h1>
    <div className="subtitle has-text-centered">
      <div className="subhead">Eat</div>
      <div className="subhead">Exercise</div>
      <div className="subhead">Track</div>
    </div>
  </div>
  <div>
    <img src={foodImg} alt="Healthy Food" className="my-image"></img>
  </div>
  <p className="subtitle">
    Instill Better Habits Today
  </p>
  <div style={{paddingBottom: 50}}></div>
<footer className="footer"><div className="content has-text-centered">
  Web App
  </div></footer>
  

</div> 

)}

}