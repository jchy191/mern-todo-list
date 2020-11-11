import React, {useContext, useEffect, useState, useReducer} from 'react';
import Data from '../Data.js';
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

    useEffect(() => {
        Data.getTasks(user)
        .then(response => {
            if (response) {
                console.log(response.tasks)

                setTasks(() => {
                    return [...response.tasks]
                })
            }
        });
    }, [user])
 

    const handleModal = () => setShow(!show);

    const handleAdd = () => {
        const newTask = {
            name: input.name,
            dueDate: date,
            priority: input.priority,
            id: uuidv4()
        }
        const newTaskList = [...tasks, newTask];
        Data.persistTasks(newTaskList, user);
        setTasks(newTaskList);
        handleModal();
    }

    const handleDelete = (e) => {
        const id = e.target.id;
        const removedTask = tasks.findIndex(task => task.id === id);
        setTasks(prevState => {
            const newTaskList = [...prevState.slice(0, removedTask), ...prevState.slice(removedTask+1)];
            Data.persistTasks(newTaskList, user);
            return newTaskList 
        })
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
            <Button variant="info" className="my-5" onClick={handleModal}>Add Task</Button>

            <Container fluid>
                <Col md={9} xl={6} as={ListGroup} className="mx-auto">
                    {tasks.map(task => <Task key={task.id} information={task} delete={handleDelete} />)}
                </Col>
            </Container>
            
        

            <Modal show={show} onHide={handleModal} className="mt-5">

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
                    <Button variant="success" onClick={handleAdd}>
                        Add Task
                    </Button>
                </Modal.Footer>

            </Modal>

        </React.Fragment>
    )

    
}

export default UserPage;