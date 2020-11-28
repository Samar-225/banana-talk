// var username=prompt("your name")


// var welcomeMessage="this script works "+username;

// alert(welcomeMessage);


var txtInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");



console.log(outputDiv);

function clickEventHandler(){
    outputDiv.innerText="#$%#$" + txtInput.value;
};


btnTranslate.addEventListener("click",clickEventHandler)







