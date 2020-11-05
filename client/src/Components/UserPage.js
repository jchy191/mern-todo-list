import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, ListGroup, Button, Modal} from 'react-bootstrap';
import {Context} from '../Context.js';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const UserPage = (props) => {

    const context = useContext(Context);
    const user = context.authUser;

    const [tasks, setTasks] = useState([
        {
            name: "Wash clothes",
            dueDate: "10/20/2020",
            priority: "high"
        },
        {
            name: "Eat",
            dueDate: "10/20/2020",
            priority: "low"
        },
    ]);

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            {user && <Redirect to={`/user/${user.username}`}/>}
            <h1 className="display-1 my-5"> Tasks </h1>
            <p>Hi, {user.name}.</p>
            <ListGroup>
                {tasks.map(task => <ListGroup.Item>{task.name}</ListGroup.Item>)}
            </ListGroup>
            <Button onClick={handleShow}>Add Task</Button>
            

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Task"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Due Date</Form.Label> <br/>
                            <DatePicker selected={date} onChange={date => setDate(date)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Priority</Form.Label>
                            <Form.Control as="select">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={setTasks}>
                        Add Task
                    </Button>
                </Modal.Footer>

            </Modal>

        </React.Fragment>
    )

    
}

export default UserPage;