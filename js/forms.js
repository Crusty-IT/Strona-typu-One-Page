function checkForm()
{
var error=false; 
var errorText=""; 
var contactName = document.getElementById("dane");
var contactEmail = document.getElementById("email");
var contactInfo = document.getElementById("info");

if (contactName.value == ""){
	document.getElementById("dane").className="form-control is-invalid";
	document.getElementById("errorName").innerHTML="Imię i nazwisko jest wymagane!";
	error=true;
} else {
	document.getElementById("dane").className="form-control is-valid";
}
	
if (contactEmail.value == ""){
	document.getElementById("email").className="form-control is-invalid";
	document.getElementById("errorEmail").innerHTML="Adres email jest wymagany!";
	error=true;
} else {
	var email = contactEmail.value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
	if(regex.test(email)==false)
	{
		document.getElementById("email").className="form-control is-invalid";
		document.getElementById("errorEmail").innerHTML="Niepoprawny adres e-mail!";
		error=true;
	} else {
		document.getElementById("email").className="form-control is-valid";
	}
}


if (contactInfo.value == "") {
	document.getElementById("info").className="form-control is-invalid";
	document.getElementById("errorInfo").innerHTML="Informacje są wymagane!";
	error=true;
} else {
	document.getElementById("info").className="form-control is-valid";
}

if (!error) return true;
else{

return false;
}
}


function checkName(){
	var contactName = document.getElementById("dane");
	if (contactName.value == ""){
		document.getElementById("dane").className="form-control is-invalid";
		document.getElementById("errorName").innerHTML="Imię i nazwisko jest wymagane!";
		error=true;
} 	else {
		document.getElementById("dane").className="form-control is-valid";
}
}


function checkEmail(){
var contactEmail = document.getElementById("email");
if (contactEmail.value == ""){
	document.getElementById("email").className="form-control is-invalid";
	document.getElementById("errorEmail").innerHTML="Adres email jest wymagany!";
	error=true;
} else {
	var email = contactEmail.value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
	if(regex.test(email)==false)
	{
		document.getElementById("email").className="form-control is-invalid";
		document.getElementById("errorEmail").innerHTML="Niepoprawny adres e-mail";
		error=true;
	} else {
		document.getElementById("email").className="form-control is-valid";
	}
}
}

function checkInfo(){
var contactInfo = document.getElementById("info");
if (contactInfo.value == "") {
	document.getElementById("info").className="form-control is-invalid";
	document.getElementById("errorInfo").innerHTML="Informacje są wymagane!";
	error=true;
} else {
	document.getElementById("info").className="form-control is-valid";
}
}


	



