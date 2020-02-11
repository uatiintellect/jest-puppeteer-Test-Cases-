import {validateName, validateConfirmPassword,validateEmail} from './validators';
let result;

// test 1
test('validateName()',() => {
    result = validateName('John Doe');
    expect(result).not.toEqual({
        valid: true,
        error: 'Must not be empty', 
    });
    result = validateName(' ');
    expect (result).toEqual({
        valid: false,
        error: 'Must not be empty',
    });
});

// test 2
test('validateConfirmPassword()',() => {
    result = validateConfirmPassword('123456a' , '1234567a');
    expect (result).toEqual({
        valid: false,
        error: 'Passwords must match'
    });
});

// test 3
test('validateEmail()',() => {
    result = validateEmail('john@email');
    expect (result).toEqual({
        valid: false,
        error: 'Must be a valid email address'
    });
});