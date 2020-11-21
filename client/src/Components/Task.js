import React from 'react';
import {ListGroup, Card, Button} from 'react-bootstrap'


const Task = (props) => {

    const {name,
        dueDate,
        priority,
        id} = props.information  

    let date = new Date(dueDate)

        return(
        <ListGroup.Item as={Card}>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Subtitle>
                Due on {date.toDateString()}
            </Card.Subtitle>
            <Card.Text>
                Priority: {priority}
            </Card.Text>
            <Button variant="danger" id={id} onClick={props.delete}>Delete</Button>
        </ListGroup.Item>
    )
}

export default Task;