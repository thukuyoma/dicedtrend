export default function emailValidation(values, errors) {
	const { email } = values;
	if (!email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		errors.email = 'Email address is invalid';
	}
}
