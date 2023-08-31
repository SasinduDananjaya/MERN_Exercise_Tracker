import React, { useState, useEffect, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function CreateExercise() {

    const [state, setState] = useState({
        username: '',
        description: '', 
        duration: 0,
        date: new Date(),
        users: []
    });

    //before load somthing this will execute
    ////////////
    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            users: ['test user'],
            userName: 'test user'
        }));
    }, []);
    //////////

    const onChangeUsername = (e) => {
        setState({
            ...state,
            username: e.target.value
        });
    };

        const onChangeDescription = (e) => {
        setState({
            ...state,
            description: e.target.value
        });
    };
        const onChangeDuration = (e) => {
        setState({
            ...state,
            duration: e.target.value
        });
    };
        const onChangeDate = (date) => {
        setState({
            ...state,
            date: date
        });
    };

    //handle submit in form
    const onSubmit = (e) =>{
        e.preventDefault();

        const exercise = {
            username: state.username,
            description: state.description,
            duration: state.duration,
            date: state.date
        }
        console.log(exercise);
        window.location = '/'   //navigate to home page after submit
    }

    const userInputRef = useRef(null);

    return (
        //Form
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <br/>
        <div className="form-group"> 
          <label>User Name: </label>
          <select 
              ref={userInputRef}
              required
              className="form-control"
              value={state.username}
              onChange={onChangeUsername}>
              {
                state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <br/>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={state.description}
              onChange={onChangeDescription}
              />
        </div>
        <br/>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={state.duration}
              onChange={onChangeDuration}
              />
        </div>
        <br/>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={state.date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    );
}

export default CreateExercise;