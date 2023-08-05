function initializeDropdown() {
  // Define an array of options (excluding the default option)
  const options = ['Mr.', 'Mrs.', 'Ms', 'Miss'];

  // Get a reference to the dropdown element
  const dropdown = document.getElementById('myDropdown');

  // Function to populate the dropdown
  function populateDropdown(optionsArray, dropdownElement) {
    optionsArray.forEach(optionText => {
      const option = document.createElement('option');
      option.text = optionText;
      dropdownElement.add(option);
    });
  }

  // Call the function to populate the dropdown
  populateDropdown(options, dropdown);

  // Function to handle dropdown change
  function handleDropdownChange() {
    const selectedOption = dropdown.value;
    if (selectedOption !== "") {
      // Option selected, perform further actions here
      alert("Selected option: " + selectedOption);
    } else {
      // No option selected, show an error message or handle it as required
      alert("Please select an option.");
    }
  }
}

// Wait for the DOM to be fully loaded before initializing the dropdown
document.addEventListener('DOMContentLoaded', initializeDropdown);





function validateFirstName(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorFirstname');

	if (inputField.value === '') {
		errorTextElement.textContent = 'Please enter something.';
	} else if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateMiddleName(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorMiddleName');

	if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateLastName(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorLastname');

	if (inputField.value === '') {
		errorTextElement.textContent = 'Please enter something.';
	} else if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateFatherName(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorFatherName');

	if (inputField.value === '') {
		errorTextElement.textContent = 'Please enter something.';
	} else if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateMotherName(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorMotherName');

	if (inputField.value === '') {
		errorTextElement.textContent = 'Please enter something.';
	} else if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateMobno(inputField) {
	const digitsOnlyRegex = /^\d{10}$/;
	const errorTextElement = document.getElementById('errorMobno');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Moblile no.';
	} else if (!digitsOnlyRegex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only (10 digits required).';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateEmail(emailField) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const errorTextElement = document.getElementById('errorText');
	const emailValue = emailField.value.trim();

	if (!emailRegex.test(emailValue)) {
		errorTextElement.textContent = 'Invalid email address format.';
	} else {
		errorTextElement.textContent = '';
	}
}



function validateAdno(inputField) {
	const digitsOnlyRegex = /^\d{12}$/;
	const errorTextElement = document.getElementById('errorAdno');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Aadhar no..';
	} else if (!digitsOnlyRegex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only (12 digits required).';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateDateOfBirth(dobField) {
	const errorTextElement = document.getElementById('dobErr');
	const dobValue = dobField.value;

	if (dobValue === '') {
		errorTextElement.textContent = 'Please enter your date of birth.';
		return;
	}

	const dobDate = new Date(dobValue);
	const currentDate = new Date();

	if (dobDate > currentDate) {
		errorTextElement.textContent = 'Invalid date of birth.';
		return;
	}

	const age = calculateAge(dobDate, currentDate);
	if (age < 18) {
		errorTextElement.textContent = 'You must be at least 18 years old.';
	} else {
		errorTextElement.textContent = '';
	}
}

function calculateAge(birthDate, currentDate) {
	let age = currentDate.getFullYear() - birthDate.getFullYear();
	const monthDifference = currentDate.getMonth() - birthDate.getMonth();

	if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
}

function validateAddress1(addressField) {
	const errorTextElement = document.getElementById('residentialAddressLine1');
	const addressValue = addressField.value.trim();

	if (addressValue === '') {
		errorTextElement.textContent = 'Please enter your address.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateAddress2(addressField) {
	const errorTextElement = document.getElementById('addressErr2');
	const addressValue = addressField.value.trim();

	if (addressValue === '') {
		errorTextElement.textContent = 'Please enter your address.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateLandmark(addressField) {
	const errorTextElement = document.getElementById('landmarkErr');
	const addressValue = addressField.value.trim();

}

function validateState(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorState');

	if (inputField.value === '') {
		errorTextElement.textContent = 'Please enter something.';
	} else if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validateCity(inputField) {
	const alphabetsRegex = /^[A-Za-z]+$/;
	const errorTextElement = document.getElementById('errorCity');

	if (inputField.value === '') {
		errorTextElement.textContent = 'Please enter something.';
	} else if (!alphabetsRegex.test(inputField.value)) {
		errorTextElement.textContent = 'Please enter alphabets only.';
	} else {
		errorTextElement.textContent = '';
	}
}

function validatePin(inputField) {
	const digitsOnlyRegex = /^\d{6}$/;
	const errorTextElement = document.getElementById('errorPincode');
	const inputValue = inputField.value.trim();

	if (inputValue === '') {
		errorTextElement.textContent = 'Please enter Moblile no.';
	} else if (!digitsOnlyRegex.test(inputValue)) {
		errorTextElement.textContent = 'Enter digits only (6 digits required).';
	} else {
		errorTextElement.textContent = '';
	}
}

//////////


function initializeDropdown2() {
  // Define an array of options (excluding the default option)
  const options = [
  "Employed (Full-Time)",
  "Employed (Part-Time)",
  "Self-Employed",
  "Student",
  "Unemployed",
  "Retired",
  "Homemaker",
  "Freelancer/Contractor",
  "Entrepreneur",
  "Government Employee",
  "Other"
];

  // Get a reference to the dropdown element
  const dropdown = document.getElementById('myDropdown2');

  // Function to populate the dropdown
  function populateDropdown2(optionsArray, dropdownElement) {
    optionsArray.forEach(optionText => {
      const option = document.createElement('option');
      option.text = optionText;
      dropdownElement.add(option);
    });
  }

  // Call the function to populate the dropdown
  populateDropdown2(options, dropdown);

  // Function to handle dropdown change
  function handleDropdownChange2() {
    const selectedOption = dropdown.value;
    if (selectedOption !== "") {
      // Option selected, perform further actions here
      alert("Selected option: " + selectedOption);
    } else {
      // No option selected, show an error message or handle it as required
      alert("Please select an option.");
    }
  }
}
// Wait for the DOM to be fully loaded before initializing the dropdown
document.addEventListener('DOMContentLoaded', initializeDropdown2);



function initializeDropdown3() {
  // Define an array of options (excluding the default option)
  const options = [
  "Salary/Wages",
  "Business Income",
  "Investments/Dividends",
  "Rental Income",
  "Pension/Retirement Funds",
  "Social Security/Disability Benefits",
  "Savings/Interest Income",
  "Freelance/Contract Work",
  "Alimony/Child Support",
  "Inheritance",
  "Lottery/Gambling Winnings",
  "Other"
];

  // Get a reference to the dropdown element
  const dropdown = document.getElementById('myDropdown3');

  // Function to populate the dropdown
  function populateDropdown3(optionsArray, dropdownElement) {
    optionsArray.forEach(optionText => {
      const option = document.createElement('option');
      option.text = optionText;
      dropdownElement.add(option);
    });
  }

  // Call the function to populate the dropdown
  populateDropdown3(options, dropdown);

  // Function to handle dropdown change
  function handleDropdownChange3() {
    const selectedOption = dropdown.value;
    if (selectedOption !== "") {
      // Option selected, perform further actions here
      alert("Selected option: " + selectedOption);
    } else {
      // No option selected, show an error message or handle it as required
      alert("Please select an option.");
    }
  }
}
// Wait for the DOM to be fully loaded before initializing the dropdown
document.addEventListener('DOMContentLoaded', initializeDropdown3);


function initializeDropdown4() {
  // Define an array of options (excluding the default option)
  const options = [
  "Less than 10,000",
  "10,000 - 1Lakh",
  "1Lakh - 5Lakh",
  "5Lakh - 10Lakh",
  "10Lakh - 20Lakh",
  "20Lakh - 50Lakh",
  "50Lakh - 1 Crore",
  "More than 1 Crore",
  
];
  // Get a reference to the dropdown element
  const dropdown = document.getElementById('myDropdown4');

  // Function to populate the dropdown
  function populateDropdown4(optionsArray, dropdownElement) {
    optionsArray.forEach(optionText => {
      const option = document.createElement('option');
      option.text = optionText;
      dropdownElement.add(option);
    });
  }

  // Call the function to populate the dropdown
  populateDropdown4(options, dropdown);

  // Function to handle dropdown change
  function handleDropdownChange4() {
    const selectedOption = dropdown.value;
    if (selectedOption !== "") {
      // Option selected, perform further actions here
      alert("Selected option: " + selectedOption);
    } else {
      // No option selected, show an error message or handle it as required
      alert("Please select an option.");
    }
  }
}
// Wait for the DOM to be fully loaded before initializing the dropdown
document.addEventListener('DOMContentLoaded', initializeDropdown4);






 function copyResidentialToPermanent() {
      const residentialAddressLine1 = document.getElementById('residentialAddressLine1').value.trim();
      const residentialAddressLine2 = document.getElementById('residentialAddressLine2').value.trim();
      const residentialLandmark = document.getElementById('residentialLandmark').value.trim();
      const residentialState = document.getElementById('residentialState').value.trim();
      const residentialCity = document.getElementById('residentialCity').value.trim();
      const residentialPincode = document.getElementById('residentialPincode').value.trim();

      const permanentAddressLine1Field = document.getElementById('permanentAddressLine1');
      const permanentAddressLine2Field = document.getElementById('permanentAddressLine2');
      const permanentLandmarkField = document.getElementById('permanentLandmark');
      const permanentStateField = document.getElementById('permanentState');
      const permanentCityField = document.getElementById('permanentCity');
      const permanentPincodeField = document.getElementById('permanentPincode');

      if (document.getElementById('copyAddressCheckbox').checked) {
        permanentAddressLine1Field.value = residentialAddressLine1;
        permanentAddressLine2Field.value = residentialAddressLine2;
        permanentLandmarkField.value = residentialLandmark;
        permanentStateField.value = residentialState;
        permanentCityField.value = residentialCity;
        permanentPincodeField.value = residentialPincode;

        permanentAddressLine1Field.setAttribute('disabled', 'disabled');
        permanentAddressLine2Field.setAttribute('disabled', 'disabled');
        permanentLandmarkField.setAttribute('disabled', 'disabled');
        permanentStateField.setAttribute('disabled', 'disabled');
        permanentCityField.setAttribute('disabled', 'disabled');
        permanentPincodeField.setAttribute('disabled', 'disabled');
      } else {
        permanentAddressLine1Field.value = '';
        permanentAddressLine2Field.value = '';
        permanentLandmarkField.value = '';
        permanentStateField.value = '';
        permanentCityField.value = '';
        permanentPincodeField.value = '';

        permanentAddressLine1Field.removeAttribute('disabled');
        permanentAddressLine2Field.removeAttribute('disabled');
        permanentLandmarkField.removeAttribute('disabled');
        permanentStateField.removeAttribute('disabled');
        permanentCityField.removeAttribute('disabled');
        permanentPincodeField.removeAttribute('disabled');
      }
    }
    
    
    function validateForm() {
      const agreeCheckbox = document.getElementById('agreeCheckbox');
      
      if (!agreeCheckbox.checked) {
        alert('Please check "I Agree" to proceed.');
        return false;
      }

      return true;
    }