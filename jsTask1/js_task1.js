var checkArray = [];
const isEmpty = str => !str.length;
const passwordCheck = (str) => {return /[a-z]/.test(str) && /[A-Z]/.test(str) && /[0-9]/.test(str);}

function redBorder(textField, msg, indexNo){
    textField.classList.remove("borderColorGreen");
    textField.classList.add("borderColorRed");
    textField.nextSibling.nextSibling.nextSibling.innerHTML = msg;
    textField.nextSibling.nextSibling.nextSibling.style.color = "red";
    checkArray[indexNo] = 0;
}
function greenBorder(textField, msg, indexNo){
    textField.classList.remove("borderColorRed");
    textField.classList.add("borderColorGreen");
    textField.nextSibling.nextSibling.nextSibling.innerHTML = msg;
    textField.nextSibling.nextSibling.nextSibling.style.color = "green";
    checkArray[indexNo] = 1;
    textField.addEventListener("focusout", btn = () => {document.getElementById("btnSubmit").disabled = false;})
}
document.getElementById("fname").addEventListener("input", function() {
    let textField = document.getElementById("fname");
    if( isEmpty(this.value) ) {        
        redBorder(textField, "Please fill this field", 0); 
    }else {        
        greenBorder(textField, "valid", 0)
    }
});
document.getElementById("lname").addEventListener("input", function() {
    let textField = document.getElementById("lname");
    if( isEmpty(this.value) ) {
        redBorder(textField, "Please fill this field", 1); 
    }else {
        greenBorder(textField, "valid", 1)
    }
});
document.getElementById("email").addEventListener("input", function() {
    let textField = document.getElementById("email");
    if( isEmpty(this.value) || !(this.value).includes("@")) {
        redBorder(textField, "Email is not valid", 2);   
    }else {
        greenBorder(textField, "valid", 2)
    }
});
document.getElementById("age").addEventListener("input", function() {
    let textField = document.getElementById("age");
    if( isNaN(this.value) || isEmpty(this.value) || this.value<18 || this.value>150) {
        redBorder(textField, "Age is not valid", 3);  
    }else {
        greenBorder(textField, "valid", 3)
    }
});
document.getElementById("contactNo").addEventListener("input", function() {
    let textField = document.getElementById("contactNo");
    if( isNaN(this.value) || isEmpty(this.value) || this.value.length < 11 || this.value.length > 11) {
        redBorder(textField, "Contact no is not valid", 4);        
    }else {
        greenBorder(textField, "valid", 4); 
    }
});
document.getElementById("password").addEventListener("input", function() {
    let textField = document.getElementById("password");
    if(isEmpty(this.value) || !passwordCheck(this.value)) {
        redBorder(textField, "password must contain one upper case one lower case and a number", 5);
    }else {
        greenBorder(textField, "valid", 5);
        document.getElementById("passwordValidation").value="";   
    }
});
document.getElementById("passwordValidation").addEventListener("input", function() {
    debugger;
    let textField = document.getElementById("passwordValidation");
    let password = document.getElementById("password").value
    if(isEmpty(this.value) || this.value != password  || !passwordCheck(this.value)) {
        redBorder(textField, "password dose not mach", 6);
    }else {
        greenBorder(textField, "valid", 6);
    }
});
document.getElementById("btnSubmit").addEventListener("click", function() {
    console.log("i am click")
    console.log(checkArray)
    let count = 0;
    for (let i = 0; i < checkArray.length; i++) {
        count += checkArray[i] 
    }
    console.log(count)
    if(count == 7){
        document.getElementById("btnSubmit").disabled = false;
    }else{
        document.getElementById("btnSubmit").disabled = true;
    }
});
