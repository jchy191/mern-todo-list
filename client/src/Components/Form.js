import React from 'react';

const Form = (props) => {

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
            <form onSubmit={handleSubmit}>
                {elements()}
                <div>
                    <button type="submit">{submitButtonText}</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Form;


const ErrorsDisplay = ({errors}) => {
    let errorsDisplay = null;
    if (errors.length) {
        errorsDisplay = (
            <div>
                <h2>Validation error:</h2>
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
            </div>
        )
    }

    return errorsDisplay
}