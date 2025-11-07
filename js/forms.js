(function() {
  var form = document.querySelector('form[novalidate]');
  if (!form) return;
  var inputName = document.getElementById('dane');
  var inputEmail = document.getElementById('email');
  var inputInfo = document.getElementById('info');
  var errorName = document.getElementById('errorName');
  var errorEmail = document.getElementById('errorEmail');
  var errorInfo = document.getElementById('errorInfo');

  function validateName() {
    if (inputName.value === '') {
      inputName.className = 'form-control is-invalid';
      errorName.innerHTML = 'Imię i nazwisko jest wymagane!';
      return false;
    } else {
      inputName.className = 'form-control is-valid';
      return true;
    }
  }

  function validateEmail(isSubmit) {
    if (inputEmail.value === '') {
      inputEmail.className = 'form-control is-invalid';
      errorEmail.innerHTML = 'Adres email jest wymagany!';
      return false;
    } else {
      var email = inputEmail.value;
      var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
      if (regex.test(email) === false) {
        inputEmail.className = 'form-control is-invalid';
        errorEmail.innerHTML = isSubmit ? 'Niepoprawny adres e-mail!' : 'Niepoprawny adres e-mail';
        return false;
      } else {
        inputEmail.className = 'form-control is-valid';
        return true;
      }
    }
  }

  function validateInfo() {
    if (inputInfo.value === '') {
      inputInfo.className = 'form-control is-invalid';
      errorInfo.innerHTML = 'Informacje są wymagane!';
      return false;
    } else {
      inputInfo.className = 'form-control is-valid';
      return true;
    }
  }

  inputName.addEventListener('blur', validateName);
  inputEmail.addEventListener('blur', validateEmail);
  inputInfo.addEventListener('blur', validateInfo);

  form.addEventListener('submit', function(e) {
    var okName = validateName();
    var okEmail = validateEmail();
    var okInfo = validateInfo();
    if (!(okName && okEmail && okInfo)) {
      e.preventDefault();
    }
  });
})();


	



