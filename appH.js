var txtInputH = document.querySelector("#txt-inputH");
var btnTranslateH = document.querySelector("#btn-translateH");
var outputDivH = document.querySelector("#outputH");


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"



var serverURLHodor="https://api.funtranslations.com/translate/hodor.json"





function getTranslationURLHodor(text) {

    return serverURLHodor + "?text=" + text;

};

function errorHandler(error)
{
    console.log("error occured",error)
    alert("something wrong with server ,try again after sometime")
}




    function clickEventHandlerH() {
        // outputDiv.innerText="#$%#$" + txtInput.value;
        var inputTextH = txtInputH.value; //taking input
        //calling server processing
        fetch(getTranslationURLHodor(inputTextH))
            .then(response => response.json())
            .then(json => {
                var translatedText=json.contents.translated
                outputDivH.innerText=translatedText})
            .catch(errorHandler)
    
        };


     
  

btnTranslateH.addEventListener("click", clickEventHandlerH);


