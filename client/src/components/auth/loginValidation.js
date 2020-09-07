import emailValidation from './emailValidation';
import passwordValidation from './passwordValidation';

export default function loginValidation(values) {
	let errors = {};
	emailValidation(values, errors);
	passwordValidation(values, errors);
	return errors;
}
