import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

const Exercise = props => (

    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      { props.isAuthenticated ?
        <td><Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a></td>
      : 
      <td></td>
      }
    </tr>
  )


class ExercisesList extends Component {
    constructor(props) {
        super(props);
    
        this.deleteExercise = this.deleteExercise.bind(this)
    
        this.state = {exercises: []};
      }
    
      componentDidMount() {
        axios.get('/exercises/')
          .then(response => {
            this.setState({ exercises: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteExercise(id) {
        axios.delete('/exercises/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
      }
      exerciseList(isAuthenticated) {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} isAuthenticated={isAuthenticated}/>;
        })
      }
    
      render() {
        const { isAuthenticated } = this.props.auth0;
        return (
          
          <div>
           
            <h3>Logged Exercises {}</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  { isAuthenticated ?
                    <th>Actions</th>     
                     : 
      <th></th>
      }
                
                </tr>
              </thead>
              <tbody>
                { this.exerciseList(isAuthenticated) }
              </tbody>
            </table>
          </div>
          )
        
    }
}
export default withAuth0(ExercisesList);