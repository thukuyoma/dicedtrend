import emailValidation from './emailValidation';
import passwordValidation from './passwordValidation';
export default function registerValidation(values) {
	let errors = {};
	const { name, password, password2 } = values;
	emailValidation(values, errors);
	passwordValidation(values, errors);
	if (!name) errors.name = 'Name is required';

	if (!password2) errors.password2 = 'Confirm password is required';

	if ((password, password2 && password !== password2)) {
		errors.password = 'Passwords does not match';
		errors.password2 = 'Passwords does not match';
	}

	return errors;
}
