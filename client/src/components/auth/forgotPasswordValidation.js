import emailValidation from './emailValidation';

export default function forgotPasswordValidation(values) {
	let errors = {};
	emailValidation(values, errors);
	return errors;
}
