// var username=prompt("your name")


// var welcomeMessage="this script works "+username;

// alert(welcomeMessage);

function dothrakiFunc(){
    var txtInputD = document.querySelector("#txt-inputD");
    var btnTranslateD = document.querySelector("#btn-translateD");
    var outputDivD = document.querySelector("#outputD");


    var serverURLDothraki="https://api.funtranslations.com/translate/dothraki.json";

    function getTranslationURLDothraki(text) {

        return serverURLDothraki + "?text=" + text;
    
    };



    function errorHandler(error)
{
    console.log("error occured",error)
    alert("something wrong with server ,try again after sometime")
};


function clickEventHandlerD() {
    // outputDiv.innerText="#$%#$" + txtInput.value;
    var inputTextD = txtInputD.value; //taking input
    //calling server processing
    fetch(getTranslationURLDothraki(inputTextD))
        .then(response => response.json())
        .then(json => {
            var translatedText=json.contents.translated
            outputDivD.innerText=translatedText})
        .catch(errorHandler)

    };

    btnTranslateD.addEventListener("click", clickEventHandlerD);

};


