import React from 'react';
import {ListGroup, Card, Button} from 'react-bootstrap'


const Task = (props) => {

    const {name,
        dueDate,
        priority,
        id} = props.information
    console.log(name, dueDate, priority)
    //const dateString = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;
  

    return(
        <ListGroup.Item as={Card}>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Subtitle>
                Due on {dueDate}
            </Card.Subtitle>
            <Card.Text>
                {priority}
            </Card.Text>
            <Button variant="danger" id={id} onClick={props.delete}>Delete</Button>
        </ListGroup.Item>
    )
}

export default Task;