export default function postValidation(values) {
	const { title, article, tags, summary, preview } = values;

	let errors = {};
	// let counter = {};
	if (!title) {
		errors.title = 'Title is requried';
	} else {
		if (title.length > 100)
			errors.title = `Title must be less than 100 characters, you have ${title.length} characters right now`;
	}
	if (!article) {
		errors.article = 'Article is requried';
	} else {
		if (article.length > 2000)
			errors.article = `Article must be less than 2000 characters, you have ${article.length} characters right now`;
	}
	if (!tags) {
		errors.tags = 'Tags are requried';
	} else {
	}
	if (!summary) {
		errors.summary = 'Summary is requried';
	} else {
		if (summary.length > 150)
			errors.summary = `Summary must be less than 150 characters, you have ${summary.length} characters right now`;
	}
	if (!preview) {
		errors.preview = 'choose post image';
	} else {
	}

	return errors;
}
