import React, {useContext, useState, useReducer} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, ListGroup, Button, Modal, Container, Col} from 'react-bootstrap';
import {Context} from '../Context.js';
import DatePicker from 'react-datepicker';
import { v4 as uuidv4 } from 'uuid';
import "react-datepicker/dist/react-datepicker.css";
import Task from './Task';



const UserPage = (props) => {

    const context = useContext(Context);
    const user = context.authUser;

    const [tasks, setTasks] = useState([]);

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    const [input, setInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name:"",
            priority:"Low"
        });

 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addNewTask = () => {
        const newTask = {
            name: input.name,
            dueDate: date,
            priority: input.priority,
            id: uuidv4()
        }
        setTasks(prevState => {
            const newTaskList = [...prevState, newTask];
            return newTaskList
        })
        handleClose();
    }

    const change = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInput({[key]: value});
    }

    return (
        <React.Fragment>
            <h1 className="display-1 my-5"> Tasks </h1>
            <p>Hi, {user.name}.</p>
            <Button variant="info" className="my-5" onClick={handleShow}>Add Task</Button>

            <Container fluid>
                <Col md={9} xl={6} as={ListGroup} className="mx-auto">
                    {tasks.map(task => <Task information={task}/>)}
                </Col>
            </Container>
            
        

            <Modal show={show} onHide={handleClose} className="mt-5">

                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Task"
                                name="name"
                                value={input.name}
                                onChange={change}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Due Date</Form.Label> <br/>
                            <DatePicker 
                                name="dueDate"
                                selected={date} 
                                onChange={date => {
                                    setDate(date);
                                }}
                                dateFormat="dd/MM/yyyy"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Priority</Form.Label>
                            <Form.Control as="select" name="priority" value={input.priority} onChange={change}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={addNewTask}>
                        Add Task
                    </Button>
                </Modal.Footer>

            </Modal>

        </React.Fragment>
    )

    
}

export default UserPage;