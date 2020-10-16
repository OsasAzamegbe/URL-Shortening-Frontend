const validate = values => {

    const keys = Object.keys(values);
    const errors = {};

    if (keys.includes("username")) {
        if (values.username.trim() === "") {
            errors.username = '* Required';
        } else if (values.username.length > 20) {
            errors.username = 'Must be 20 characters or less';
        }
    }
    
    if (keys.includes("password")) {
        if (values.password.trim() === "") {
            errors.password = '* Required';
        } else if (values.password.length < 8) {
            errors.password = 'Must be longer than 8 characters';
        } else if (values.password.length > 100) {
            errors.password = 'Must be less than 100 characters';
        }
    }
    
    if (keys.includes("email")) {
        if (values.email.trim() === "") {
            errors.email = '* Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        } else if (values.email.length > 100) {
            errors.email = 'Must be 100 characters or less';
        }
    }
    

    return errors;
};


export {validate}