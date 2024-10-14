const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( function(button){
    button.addEventListener("click",function (e) {
         if(e.target.id==='grey'){
            // body.style.backgroundColor='grey';
            body.style.backgroundColor= e.target.id;
         }
         if(e.target.id==='white'){
            body.style.backgroundColor='white';
         }
         if(e.target.id==='red'){
            body.style.backgroundColor='red';
         }
         if(e.target.id==='blue'){
            body.style.backgroundColor='blue';
         }   
    })
})
