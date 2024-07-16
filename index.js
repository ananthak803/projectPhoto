
const btn = document.querySelector("#loginButton");
btn.addEventListener('click',login);
function login(){
const username = document.querySelector("#username").value;
const password = document.querySelector("#password").value;
if(username == "admin" && password == "admin"){
    window.location.href = "homePage.html";
}}