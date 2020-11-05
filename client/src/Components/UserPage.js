import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';
import {Context} from '../Context.js'


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

    return (
        <React.Fragment>
            {user && <Redirect to={`/user/${user.username}`}/>}
            <h1 className="display-1 my-5"> Tasks </h1>
            <p>Hi, {user.name}.</p>
            <ListGroup>
                {tasks.map(task => <ListGroup.Item>{task.name}</ListGroup.Item>)}
            </ListGroup>
        </React.Fragment>
    )

    
}

export default UserPage;