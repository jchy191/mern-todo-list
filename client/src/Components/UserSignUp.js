import React, {useReducer, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from './Form'

const UserSignUp = ({context}) => {

    const [input, setInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name:"",
            username:"",
            password:""
        });
    const [errors, setErrors] = useState([]);
    const history = useHistory();


    const change = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInput({[key]: value});
    }

    const submit = (e) => {

        context.data.createUser(input)
        .then((err, data) => {
            setErrors(err.message);
        })
        .catch(err => {
            console.log(err);
            
        });
    }

    const cancel = () => {
        history.push('/')
    }

    
    return (
        <div>
           <h1>Sign Up</h1>
            <Form 
                cancel={cancel}
                errors={errors}
                submit={submit}
                submitButtonText="Sign Up"
                elements={() => (
                    <React.Fragment>
                        <input 
                            id="name" 
                            name="name" 
                            type="text"
                            value={input.name} 
                            onChange={change} 
                            placeholder="Name" />
                        <input 
                            id="username" 
                            name="username" 
                            type="text"
                            value={input.username} 
                            onChange={change} 
                            placeholder="User Name" />
                        <input 
                            id="password" 
                            name="password"
                            type="password"
                            value={input.password} 
                            onChange={change} 
                            placeholder="Password" />  
                    </React.Fragment>
                )}
            /> 
        </div>
    )

}

export default UserSignUp;