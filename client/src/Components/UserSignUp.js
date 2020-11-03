import React, {useReducer, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Context} from '../Context.js'
import FormTemplate from './FormTemplate';
import {Form, Row, Col} from 'react-bootstrap';

const UserSignUp = () => {

    const [input, setInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name:"",
            username:"",
            password:""
        });
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const context = useContext(Context);


    const change = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInput({[key]: value});
    }

    const submit = (e) => {
        
        context.data.createUser(input)
        .then(({error}) => {
            console.log(error)
            if (error.message){
                setErrors(error.message);
            } else {
                history.push('/')
            }
        })
        .catch(err => {
            console.log(err);
            
        });
    }

    const cancel = () => {
        history.push('/')
    }

    
    return (
        <Row>
            <Col xs={7} md={5} xl={4} className="mx-auto"> 
                <h1 className="display-1 my-5">Register</h1>
                <FormTemplate 
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign Up"
                    elements={() => (
                        <React.Fragment>                                            
                            <Form.Group controlId="formName">
                                <Form.Label className="lead">Name</Form.Label>
                                <Form.Control 
                                    required
                                    type="name" 
                                    name="name" 
                                    placeholder="Enter name" 
                                    value={input.name} 
                                    onChange={change}
                                    />  
                                <Form.Control.Feedback type="invalid">
                                    Please provide your name.
                                </Form.Control.Feedback>                                
                            </Form.Group>
                            <Form.Group controlId="formUsername">
                                <Form.Label className="lead">Username</Form.Label>
                                <Form.Control 
                                    required
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter username" 
                                    value={input.username} 
                                    onChange={change} />  
                                <Form.Control.Feedback type="invalid">
                                    Please provide your desired username.
                                </Form.Control.Feedback>                          
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label className="lead">Password</Form.Label>
                                <Form.Control 
                                    required
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter password" 
                                    value={input.password} 
                                    onChange={change} />   
                                <Form.Control.Feedback type="invalid">
                                    Please provide a password.
                                </Form.Control.Feedback>                               
                            </Form.Group>
                        </React.Fragment>
                    )}
                />  
            </Col>
        </Row>
           
    )

}

export default UserSignUp;