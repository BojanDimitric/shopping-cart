const validate = (value, rules) => {
    let valid = true;

    for (let key in rules) {
        if (key === 'required') {
            valid = value !== '' && valid;
        };
        if (key === 'minLength') {
            valid = value.length >= rules[key] && valid;
        };
        if (key === 'maxLength') {
            valid = value.length <= rules[key] && valid;
        };
        if (key === 'isEmail') {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            valid = pattern.test(value) && valid;
        };
        if (key === 'isNumeric') {
            const pattern = /^\d+$/;
            valid = pattern.test(value) && valid;
        };
    };

    return valid;
};

export { 
    validate
};