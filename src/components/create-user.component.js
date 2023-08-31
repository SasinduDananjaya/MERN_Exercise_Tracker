import React, { useState, useEffect, useRef } from "react";

function CreateUser() {

    const [state, setState] = useState({
        username: ''
    });

    const onChangeUsername = (e) => {
        setState({
            ...state,
            username: e.target.value
        });
    };

    //handle submit in form
    const onSubmit = (e) =>{
        e.preventDefault();

        const user = {
            username: state.username
        }
            console.log(user);
            
            //This will allow to enter multiple users
            setState({
                username: ''
            })


    }

    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={state.username}
                onChange={onChangeUsername}
                />
          </div>
          <br/>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
}

export default CreateUser;