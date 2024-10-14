
// // Contact Form Validation
// document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault(); // Prevent the form from submitting
    
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();
//     let valid = true;
    
//     // Name validation
//     if (name === "") {
//         document.getElementById("nameError").textContent = "Name is required.";
//         valid = false;
//     } else {
//         document.getElementById("nameError").textContent = "";
//     }
    
//     // Email validation
//     if (email === "") {
//         document.getElementById("emailError").textContent = "Email is required.";
//         valid = false;
//     } else if (!validateEmail(email)) {
//         document.getElementById("emailError").textContent = "Please enter a valid email address.";
//         valid = false;
//     } else {
//         document.getElementById("emailError").textContent = "";
//     }
    
//     // Message validation
//     if (message === "") {
//         document.getElementById("messageError").textContent = "Message is required.";
//         valid = false;
//     } else {
//         document.getElementById("messageError").textContent = "";
//     }

//     if (valid) {
//         // You can handle form submission here (e.g., sending data via an API)
//         alert("Form submitted successfully!");
//         this.reset(); // Reset form fields
//     }
// });

// // Helper function to validate email using regex
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

const contactForm = document.getElementById("contactForm");
const btn = document.getElementById("btn");
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

let valid =true;

function validateEmail(email){
   let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(String(email).toLocaleLowerCase());
}
// contactForm.addEventListener("submit",function(e){})
btn.addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // valid = true;


    if (name ===''){
        nameError.textContent="Name is required"
        valid=false;
    }else{
        nameError.textContent="";
    }
    if(email==""){
        emailError.textContent="Email is required";
        valid= false;
    }else if(!validateEmail(email)){
        emailError.textContent="Please enter valid email";
        valid= false;
    }else{
        emailError.textContent="";
    }
    if(message==""){
        messageError.textContent="Message is required";
        valid=false;
    }else{
        messageError.textContent="";
    }
    if(valid){
        confirm("Form is subbmited sucessfully!");
        contactForm.reset();
        // this.reset();
    }

})























