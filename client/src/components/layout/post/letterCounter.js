export default function letterCounter(values, errors) {
	let counter = {};
	const { title, article, tags, summary } = values;

	if (title) {
		counter.title = title.length;
		if (title.length < 6) {
			errors.title = 'title should not be less than 225 letters';
		}
		if (title.length < 100) {
			errors.title = `Title must be less than 100 characters, you have ${title.length} characters right now`;
		}
	}

	return counter;
}
