import React from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const FormTemplate = (props) => {

    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
    } = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    const handleCancel = (e) => {
        cancel();
    }

    return (

        <div>
            <ErrorsDisplay errors={errors}/>
            <Form onSubmit={handleSubmit}>
                {elements()}
                <div>
                    <Button variant="outline-info" type="submit" className="mr-3">{submitButtonText}</Button>
                    <Button variant="outline-danger" onClick={handleCancel} className="ml-3">Cancel</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormTemplate;


const ErrorsDisplay = ({errors}) => {
    console.log({errors});
    let errorsDisplay = null;
    if (errors.length) {
        errorsDisplay = (
            <div>
                <h2>Validation error(s):</h2>
                <ListGroup variant="flush" className="mt-3 mb-5">
                    {errors.map((error, i) => <ListGroup.Item key={i}>{error}</ListGroup.Item>)}
                </ListGroup>
            </div>
        )
    }

    return errorsDisplay
}