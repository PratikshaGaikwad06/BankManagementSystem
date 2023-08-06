/**
 * 
 */

 function validateAccno(inputField) {
	const digitsOnlyRegex = /^\d{15}$/;
	const errorTextElement = document.getElementById('errorAccno');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Account no...';
	} else if (!digitsOnlyRegex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only (15 digits required).';
	} else {
		errorTextElement.textContent = '';
	}
}


 function validateAccno2(inputField) {
	const digitsOnlyRegex = /^\d{15}$/;
	const errorTextElement = document.getElementById('errorAccno2');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Account no..';
	} else if (!digitsOnlyRegex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only (15 digits required).';
	} else {
		errorTextElement.textContent = '';
	}
}


 function validateamount(inputField) {
	const regex = /^\d+$/;;
	const errorTextElement = document.getElementById('erroramount');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Amount..';
	} else if (!regex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateDate() {
			var dateInput = document.getElementById('dateInput').value;

			if (dateInput === '') {
				document.getElementById('errorMessage').style.display = 'block';
			} else {
				document.getElementById('errorMessage').style.display = 'none';
				alert('Date selected: ' + dateInput);
				// You can perform further actions with the selected date here.
			}
		}