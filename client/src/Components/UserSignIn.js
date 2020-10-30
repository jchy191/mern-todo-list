import React, {useReducer, useState} from 'react';
import {useHistory} from 'react-router-dom';
import FormTemplate from './FormTemplate';
import {Form, Row, Col} from 'react-bootstrap';

const UserSignIn = ({context}) => {

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

  
    }

    const cancel = () => {
        history.push('/')
    }

    
    return (
        <Row>
            <Col xs={7} md={5} xl={4} className="mx-auto"> 
                <h1 className="display-1 my-5">Sign In</h1>
                <FormTemplate 
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign Up"
                    elements={() => (
                        <React.Fragment>
                            <Form.Group controlId="formUsername">
                                <Form.Label className="lead">Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter username" 
                                    value={input.username} 
                                    onChange={change} />                            
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label className="lead">Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter password" 
                                    value={input.password} 
                                    onChange={change} />                            
                            </Form.Group>
                        </React.Fragment>
                    )}
                />  
            </Col>
        </Row>
           
    )

}

export default UserSignIn;