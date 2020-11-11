import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import CreateDiet from "./components/create-diet.component";
import Navbar from "./components/navbar.component";

import Profile from './components/Profile';
import Loading from './components/Loading';
import PrivateRoute from './components/private-route';

import { ValueProvider } from './components/ValueContext';

import { useAuth0 } from '@auth0/auth0-react'; 

function App() {
  const {isLoading} = useAuth0();
  if (isLoading)
  return(
   
      <Loading/>
    
  )
  return (
    
    <ValueProvider>

   <Router>
      <div className = "container">
   <Navbar />
      <br/>
         <PrivateRoute path="/profile" component={Profile} />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <PrivateRoute path="/create" component={CreateExercise} />
        <PrivateRoute path="/user" component={CreateUser} />
        <PrivateRoute path="/diet" component={CreateDiet} />
        
    
        </div>
       
    </Router>
   
    
    </ValueProvider>
  );

}
export default App;