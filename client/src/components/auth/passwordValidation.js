export default function passwordValidation(values, errors) {
	const { password } = values;
	if (!password) {
		errors.password = 'Password is required';
	} else if (password.length < 6) {
		errors.password = 'Password must be 6 or more characters';
	}
}
 