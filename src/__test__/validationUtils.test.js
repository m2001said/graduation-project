import { validate } from '../components/mainPage/modal/validationUtils';

describe('validate function', () => {
    it('should return error message if email is empty', () => {
        const errorMessage = validate('', 'password123');
        expect(errorMessage).toEqual('Both fields are required.');
    });

    it('should return error message if password is empty', () => {
        const errorMessage = validate('test@example.com', '');
        expect(errorMessage).toEqual('Both fields are required.');
    });

    it('should return error message if email format is invalid', () => {
        const errorMessage = validate('invalid-email', 'password123');
        expect(errorMessage).toEqual('Please enter a valid email address.');
    });

    it('should return error message if password length is less than 6 characters', () => {
        const errorMessage = validate('test@example.com', 'pass');
        expect(errorMessage).toEqual('Password must be at least 6 characters long.');
    });

    it('should return empty string if validation is successful', () => {
        const errorMessage = validate('test@example.com', 'password123');
        expect(errorMessage).toEqual('');
    });
});
