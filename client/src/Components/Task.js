import React from 'react';
import {ListGroup, Card, Button} from 'react-bootstrap'


const Task = ({information}) => {

    const {name,
        dueDate,
        priority,
        id} = information
    
    const dateString = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`

    return(
        <ListGroup.Item key={id} as={Card}>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Subtitle>
                Due on {dateString}
            </Card.Subtitle>
            <Card.Text>
                {priority}
            </Card.Text>
            <Button variant="danger">Delete</Button>
        </ListGroup.Item>
    )
}

export default Task;