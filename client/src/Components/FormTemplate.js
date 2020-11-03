import React, {useState} from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const FormTemplate = (props) => {

    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
    } = props;
    const [validated, setValidated] = useState(false);
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     submit();
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.stopPropagation();
        }
        setValidated(true);
        submit();
      };

    const handleCancel = (e) => {
        cancel();
    }

    return (

        <div>
            <ErrorsDisplay errors={errors}/>
            <Form noValidate validate={validated} onSubmit={handleSubmit}>
                {elements()}
                <div>
                    <Button variant="outline-info" type="submit" className="mt-3 mr-3">{submitButtonText}</Button>
                    <Button variant="outline-danger" onClick={handleCancel} className="mt-3 ml-3">Cancel</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormTemplate;


const ErrorsDisplay = ({errors}) => {
    let errorsDisplay = null;
    console.log(errors)
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