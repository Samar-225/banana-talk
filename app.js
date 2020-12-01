// var username=prompt("your name")


// var welcomeMessage="this script works "+username;

// alert(welcomeMessage);


var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURLDothraki="https://api.funtranslations.com/translate/dothraki.json"

var serverURLValyrian="https://api.funtranslations.com/translate/"



function getTranslationURL(text) {
    return serverURLDothraki + "?" + "text=" + text

}

function errorHandler(error)
{
    console.log("error occured",error)
    alert("something wrong with server ,try again after sometime")
}

function clickEventHandler() {
    // outputDiv.innerText="#$%#$" + txtInput.value;
    var inputText = txtInput.value; //taking input
    //calling server processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText=json.contents.translated
            outputDiv.innerText=translatedText})
        .catch(errorHandler)

    };




btnTranslate.addEventListener("click", clickEventHandler)