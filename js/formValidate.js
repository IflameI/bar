// Set Error Message
function setError(input, errormsg) {
	const formGroup = input.parentElement;
	const inputAlert = formGroup.querySelector(".input-alert");
	formGroup.className = "form-input error";
	inputAlert.innerText = errormsg;
}

// Set Success Message
function setSuccess(input) {
	const formGroup = input.parentElement;
	formGroup.className = "form-input success";
}

// Form Validation Check
function validateForm(form) {
	if (form.name.value.trim() === "") {
		setError(form.name, "Name cannot be blank");
		return false;
	} else {
		setSuccess(form.name);
	}
	if (form.phone.value.trim() === "") {
		setError(form.phone, "Phone cannot be blank");
		return false;
	} else {
		setSuccess(form.phone);
	}
	if (form.guest.value.trim() === "") {
		setError(form.guest, "Guests cannot be blank");
		return false;
	} else {
		setSuccess(form.guest);
	}
	if (form.date.value.trim() === "") {
		setError(form.date, "Date cannot be blank");
		return false;
	} else {
		setSuccess(form.date);
	}
	if (form.time.value.trim() === "") {
		setError(form.time, "Time cannot be blank");
		return false;
	} else {
		setSuccess(form.time);
	}
	

	return true;
}
