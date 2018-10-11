
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import img1 from './imagenes/1.jpg';
import img2 from './imagenes/2.jpg';
import img3 from './imagenes/3.jpg';
import img4 from './imagenes/4.jpg';

const App = () => (
  <Router>
    <div className="nav">
      <ul >
    
        <li >
          <Link to="/">Dropdown</Link>
        </li>
    
        <li>
          <Link to="/left-sidebar">Left Sidebar</Link>
        </li>
        <li>
          <Link to="/telephasic" className="LinkTelephasic">TELEPHASIC</Link>
        </li>
        <li>
          <Link to="/right-sidebar">Right Sidebar</Link>
        </li>
        <li>
          <Link to="/no-sidebar">No Sidebar</Link>
        </li>
   
      </ul>

     


      <Route path="/left-sidebar" component={LeftSideBar} />
      <Route path="/telephasic" component={Telephasic} />
      <Route path="/right-sidebar" component={RightSideBar} />
      <Route path="/no-sidebar" component={NoSideBar} />
    </div>
  </Router>
);




const LeftSideBar = () => (
  <div className="Left-Sidebar">
    <div className="Primero">

<h3>Elit sed feugiat</h3>
<p> Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel sem sit amet dolor neque semper magna. 
Lorem ipsum dolor sit amet consectetur et dolore adipiscing elit. Curabitur vel sem sit.
</p>

<button className="boton-1">Magna amet nullam</button>
<hr />
<img src={img1} width="375" height="185" />

<h3>Commodo lorem varius</h3>

<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. 
  Curabitur et vel sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore adipiscing elit. 
  Curabitur vel sem sit.</p>
  <button className="boton-1">Ipsum sed color</button>

    </div>
    <div className="Segundo">
    <h3>Left Sidebar</h3>
    <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor <br></br>neque semper magna lorem ipsum.</p>
    <img src={img2} width="825" height="300" />
    <p>Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien mollis luctus hendrerit, 
      orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum condimentum, mauris a mattis vestibulum, 
      urna mauris cursus lorem, eu fringilla lacus ante non est. Nullam vitae feugiat libero, eu consequat sem. 
      Proin tincidunt neque eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et turpis vel blandit. 
      Nullam ornare congue massa, at commodo nunc venenatis varius. Praesent mollis nisi at vestibulum aliquet. 
      Sed sagittis congue urna ac consectetur.</p>
      <br></br>
    <p>
Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum gravida nibh eget, volutpat odio. 
Proin rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. 
Vestibulum condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus ante non est. 
Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque eros. Duis faucibus blandit ligula, 
mollis commodo risus sodales at. Sed rutrum et turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius. 
Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
    </div>
  </div>
);

const Telephasic = () => (
  <div className="Telephasic">
  <center>
    <h1>Telephasic is a responsive <br></br>
site template by HTML5 UP</h1>
<br></br>
<h2>Designed and built by AJ and released for free under <br></br>
the Creative Commons Attribution 3.0 license.</h2>
<button className="boton-2">Get this party started</button>
</center>
  </div>
);

const RightSideBar = () => (
  <div className="Right-Sidebar">
    <div className="Tercero">
<h3>Right Sidebar</h3>
<h4>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor neque semper magna lorem ipsum.</h4>
<img src={img3} width="826" height="300" /> 

<p>Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus, 
  t cursus nulla mi sed elit. Vestibulum condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus 
  ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque eros. Duis faucibus blandit ligula, mollis 
  commodo risus sodales at. Sed rutrum et turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius. 
  Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur. </p>
<p>Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum gravida nibh eget, volutpat odio. 
  Proin rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum condimentum,
   mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus ante non est. Nullam vitae feugiat libero, eu 
   consequat sem. Proin tincidunt neque eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et turpis
    vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius. Praesent mollis nisi at vestibulum aliquet. 
    Sed sagittis congue urna ac consectetur.</p>
<p>Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend eleifend felis aliquet ornare. 
  Vestibulum porta velit at elementum elementum.</p>
    </div>
    <div className="Cuarto">
    <h3>Elit sed feugiat</h3>
    <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel sem sit amet dolor neque semper magna. 
      Lorem ipsum dolor sit amet consectetur et dolore adipiscing elit. Curabitur vel sem sit.</p>
      <button className="boton-1">Magna amet nullam</button>
      <hr />
<img src={img1} width="375" height="185" />

<h3>Commodo lorem varius</h3>

<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. 
  Curabitur et vel sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore adipiscing elit. 
  Curabitur vel sem sit.</p>
  <button className="boton-1">Ipsum sed color</button>

    </div>
    
  </div>
);

const NoSideBar = () => (
  <div className="No-Sidebar">
<div className="No-Sidebar-2">
    <h3>No Sidebar</h3>
    <h4>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit dolor neque semper.</h4>
    <img src={img4} width="1202.5" height="425" />
    <p>
    Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus,
     et cursus nulla mi sed elit. Vestibulum condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus 
     ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque eros. Duis faucibus blandit ligula, 
     mollis commodo risus sodales at. Sed rutrum et turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis 
     varius. Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
     <br></br>

     <p>
Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum gravida nibh eget, volutpat odio. Proin rhoncus, 
sapien mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum condimentum, mauris a mattis 
vestibulum, urna mauris cursus lorem, eu fringilla lacus ante non est. Nullam vitae feugiat libero, eu consequat sem. 
Proin tincidunt neque eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et turpis vel blandit. 
Nullam ornare congue massa, at commodo nunc venenatis varius. Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue
 urna ac consectetur.
 </p>
 <br></br>
 <p>
Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at 
elementum elementum.


    </p>
    </div>
  </div>
);



export default App;