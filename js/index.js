let emailSignUpInput = document.getElementById('emailLoginInput');
let userNameSignUpInput = document.getElementById('userNameLoginInput');
let passwordSignUpInput = document.getElementById('passwordLoginInput');
let emailAlert = document.getElementById('emailInputAlert');
let userNameAlert = document.getElementById('usernameInputAlert');
let passwordAlert = document.getElementById('passwordInputAlert');
let msgAlert = document.getElementById('msgAlert');
let modelForm = document.querySelector('.form');
let btnLogin=document.getElementById("inputLogin");
let btnSignUp=document.getElementById("inputSignUp")
let usersData=[];

if (localStorage.getItem("ListUsers") != null) {
    usersData = JSON.parse(localStorage.getItem("ListUsers"));

}
function signUp(){
    
}

function addUser(){
    if(checkIsEmpty()){
        msgAlert.classList.replace('d-none', 'd-block');
        msgAlert.innerHTML = "All info are required";
    }
    else if(validationAllInputs() == true){
        let user = {
            name: userNameSignUpInput.value,
            email: emailSignUpInput.value,
            password: passwordSignUpInput.value
        };

        if (!localStorage.getItem("ListUsers")) {
        usersData.push(user);
        localStorage.setItem("ListUsers" , JSON.stringify(usersData));
        location.replace("Welcome.html");}

        else{
            usersData = JSON.parse(localStorage.getItem('ListUsers'));
            if(exist(usersData)){
                msgAlert.classList.replace('d-none', 'd-block')
                msgAlert.innerHTML="user Exist"
            }else{
                usersData.push(user);
                localStorage.setItem("ListUsers" , JSON.stringify(usersData));
                location.replace("Welcome.html");
            }
        }
    }
};
function exist(users){
    let check = user =>  user.email === emailSignUpInput.value ;
    if(users.some(check)){
        return true
    }else{
        return false
    }
}
if(btnSignUp){
btnSignUp.addEventListener('click', addUser);}
////////////////////////////////Check/////////////////////////
function checkIsEmpty() {
    if (emailSignUpInput.value == "" || passwordSignUpInput.value == "" || userNameAlert.value == "") {
        return true;
    } else {
        return false;
    }
}
function checkIsEmptyLogin() {
    if (emailSignUpInput.value == "" || passwordSignUpInput.value == "") {
        return true;
    } else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////Display


/////////////////add user///////////////////////ADD/////////////////////////


////////////////////////////////////BTN////////////////////
function logIn(){
    if(checkIsEmptyLogin()){
        msgAlert.classList.replace('d-none', 'd-block');
        msgAlert.innerHTML = "All info are required";
    }
    else if (!exist(usersData)) {
        msgAlert.classList.replace('d-none', 'd-block')
        msgAlert.innerHTML="Register First! => Email Not Register"

    }else if(exist(usersData)){
        location.replace("Welcome.html")
    }else{
        msgAlert.classList.replace('d-none','d-block')
        msgAlert.innerHTML = "invalid email or password , Please try again!";
    }
}

if(btnLogin){
    btnLogin.addEventListener('click',logIn)
}

///////////////////////////////Email Validation/////////////////
function validationEmail() {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/;
    if (regex.test(emailSignUpInput.value) == true) {
        emailSignUpInput.classList.add('is-valid');
        emailSignUpInput.classList.remove('is-invalid');
        if (emailAlert) {
            emailAlert.classList.replace('d-block', 'd-none');

        }
        return true;
    } else {
        emailSignUpInput.classList.add('is-invalid');
        emailSignUpInput.classList.remove('is-valid');
        if (emailAlert) {
            emailAlert.classList.replace('d-none', 'd-block');
        }
        return false;
    }

}
//////////////////////////////////////////Password Validation/////////////////////////////
function validationPassword() {
    let regex =
        /^[A-Za-z0-9]{5,}$/;
    if (regex.test(passwordSignUpInput.value) == true) {
        passwordSignUpInput.classList.add('is-valid');
        passwordSignUpInput.classList.remove('is-invalid');
        if(passwordAlert)
        {
            passwordAlert.classList.replace('d-block', 'd-none');
        }

        return true;
    } else {
        passwordSignUpInput.classList.add('is-invalid');
        passwordSignUpInput.classList.remove('is-valid');

        if(passwordAlert)
        {
            passwordAlert.classList.replace('d-none', 'd-block');
        }        return false;
    }
}
//////////////////////////////////////////////////////////Username Validation/////////////////////////////
function validationUserName() {
    let regex =
        /^[A-Z][a-z A-z 0-9]{2,}$/;
    if (regex.test(userNameSignUpInput.value) == true) {
        userNameSignUpInput.classList.add('is-valid');
        userNameSignUpInput.classList.remove('is-invalid');
        if (userNameAlert) {
            userNameAlert.classList.replace('d-block', 'd-none');

        }
        return true;
    } else {
        userNameSignUpInput.classList.add('is-invalid');
        userNameSignUpInput.classList.remove('is-valid');
        if (userNameAlert) {
            userNameAlert.classList.replace('d-none', 'd-block');
        }
        return false;
    }

}
//////////////////////////////Validation All//////////////////////////
function validationAllInputs() {
    if (validationPassword() == true && validationEmail() == true && validationUserName() == true) {
        return true;
    } else {
        return false;
    }
}
function validationOr(){
    if (validationPassword() == true || validationEmail() == true || validationUserName() == true) {
        return true;
    } else {
        return false;
    }
}
////////////////////////////////////////////////////////////////////////////





















