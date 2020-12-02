import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton  from "./LoginButton";
import LogoutButton  from "./LogoutButton";


export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: "about",
      navItem: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    
    console.log("working", e.target.id);
    
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Health4Life
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li id="profile"className="navbar-item">
              <Link to="/profile" className="nav-link"onClick={this.handleClick}>
                Profile
              </Link>
            </li>
            <li id="exercises"className="navbar-item">
              <Link to="/" className="nav-link" onClick={this.handleClick}>
                Exercises
              </Link>
            </li>
            <li id="create"className="navbar-item">
              <Link to="/create" className="nav-link" onClick={this.handleClick}> 
                Create Exercise Log
              </Link>
            </li>
            <li id="user"className="navbar-item">
              <Link to="/user" className="nav-link" onClick={this.handleClick}> 
                Create User
              </Link>
            </li>
           
         
            
          </ul>
          
        </div>
        <LoginButton/>
        <LogoutButton/>
      </nav>
    );
  }
}
