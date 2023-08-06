function validateAccno(inputField) {
	const digitsOnlyRegex = /^\d{15}$/;
	const errorTextElement = document.getElementById('errorAccno');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Account no..';
	} else if (!digitsOnlyRegex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only (15 digits required).';
	} else {
		errorTextElement.textContent = '';
	}
}