import React, {useReducer, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Context} from '../Context.js'
import FormTemplate from './FormTemplate';
import {Form, Row, Col} from 'react-bootstrap';

const UserSignIn = () => {

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

    const submit = async (e) => {
        const {username, password} = input;
        const credentials = {username, password};
        context.actions.signIn(credentials)
            .then(user => {
                if (user === null) {
                    setErrors(['Sign-in was unsuccessful'])
                } else {
                    history.push(`/user/${username}`);
                }
            })
            .catch(err => {
                history.push('/error');
            });
    }

    const cancel = () => {
        history.push('/');
    }

    
    return (
        <Row>
            <Col xs={7} md={5} xl={4} className="mx-auto"> 
                <h1 className="display-1 my-5">Sign In</h1>
                <FormTemplate 
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign In"
                    elements={() => (
                        <React.Fragment>
                            <Form.Group controlId="formUsername">
                                <Form.Label className="lead">Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter username" 
                                    value={input.username}                             
                                    onChange={change}
                                    isInvalid={!input.username.length} />       
                                <Form.Control.Feedback type="invalid">
                                    Please provide your username.
                                </Form.Control.Feedback>                       
                            </Form.Group>                             
                            <Form.Group controlId="formPassword">
                                <Form.Label className="lead">Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter password" 
                                    value={input.password} 
                                    onChange={change} /> 
                                <Form.Control.Feedback type="invalid">
                                    Please provide your password.
                                </Form.Control.Feedback>                             
                            </Form.Group>
                        </React.Fragment>
                    )}
                />  
            </Col>
        </Row>
           
    )

}

export default UserSignIn;