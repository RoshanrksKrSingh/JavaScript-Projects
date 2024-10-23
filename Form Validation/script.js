const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const ConfirmPassError = document.getElementById('ConfirmPassError');

submitBtn.addEventListener("click" , (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword() && validateConfirmPass()==true){
        alert("Form Submitted Successfully");
         // Clear all input fields after successful submission
        name.value ='';
        email.value = '';
        password.value = '';
        confirmPass.value = '';
         // Optionally, remove the icons and error messages after clearing the form
         nameError.innerHTML = '';
         emailError.innerHTML = '';
         passwordError.innerHTML = '';
         passError.innerHTML = '';
         document.querySelectorAll('i.fa-solid').forEach(icon => icon.classList.remove('fa-xmark', 'fa-check'));
        
    }
});

//creating validateName function

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length==0){
        nameError.innerHTML = "Name is Required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)){
      nameError.innerHTML = "Write Full Name";
      nameError.previousElementSibling.classList.add('fa-xmark');
      return false;
    }

    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

//creating validate email function

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length==0){
        emailError.innerHTML = "Email is Required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      emailError.innerHTML = "Write Valid Email";
      emailError.previousElementSibling.classList.add('fa-xmark');
      return false;
    }

    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

//creating validate password function
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length==0){
        passwordError.innerHTML = "Password is Required";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
      passwordError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
      passwordError.previousElementSibling.classList.add('fa-xmark');
      return false;
    }

    passwordError.innerHTML="";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}

//creating ConfirmPassword function

function validateConfirmPass(){
    let confirmPass = document.getElementById('confirmPass').value;
    let password = document.getElementById('password').value;
    if(confirmPass.length==0){
        passError.innerHTML = "Please confirm your password";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(confirmPass !== password){
        passError.innerHTML="Passwords do not match";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML="";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}


