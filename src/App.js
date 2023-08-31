import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

//Import Components
import Navbar from './components/navbar.component.js'
import CreateExercise from './components/create-exercise.component.js'
import ExercisesList from './components/exercises-list.component.js'
import EditExercise from './components/edit-exercise.component.js'
import CreateUser from './components/create-user.component.js'


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Routes>
          <Route path="/" element={<ExercisesList/>}/>
          <Route path="/edit/:id" element={<EditExercise/>}/>
          <Route path="/create" element={<CreateExercise/>}/>
          <Route path="/user" element={<CreateUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
