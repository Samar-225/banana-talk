
var txtInputV = document.querySelector("#txt-inputV");
var btnTranslateV = document.querySelector("#btn-translateV");
var outputDivV = document.querySelector("#outputV");




var serverURLValyrian="https://api.funtranslations.com/translate/valyrian.json"



function getTranslationURLValyrian(text) {

    return serverURLValyrian + "?text=" + text;

};


function errorHandler(error)
{
    console.log("error occured",error)
    alert("something wrong with server ,try again after sometime")
}


function clickEventHandlerV() {
    // outputDiv.innerText="#$%#$" + txtInput.value;
    var inputTextV = txtInputV.value; //taking input
    //calling server processing
    fetch(getTranslationURLValyrian(inputTextV))
        .then(response => response.json())
        .then(json => {
            var translatedText=json.contents.translated
            outputDivV.innerText=translatedText})
        .catch(errorHandler)

    };


    btnTranslateV.addEventListener("click", clickEventHandlerV);









