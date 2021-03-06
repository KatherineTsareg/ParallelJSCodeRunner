let threadNumber: number = window.navigator.hardwareConcurrency;
let sampleGetPi: Array<string> = [
    "var accuracy = 10000\;\nvar pi = 0.0\;",
    "onmessage = function(accuracy\)\n\{\n    var count = 0\;\n    for (var i = 0; i < accuracy.data; i++)\{\n        var x=(Math.random() * (1000 + 1000) - 1000)/1000\;\n        var y=(Math.random() * (1000 + 1000) - 1000)/1000\;\n        if ((x * x + y * y) <= 1) ++count\;\n    }\;\n    postMessage(count)\;\n};",
    "worker.postMessage(accuracy)\;\nworker.onmessage = function (event\)\n\{\npi += (event.data/ accuracy * 4)\;\n};"];


function hide(className: string){
    const elements = document.getElementsByClassName(className)[0] as HTMLElement;
    elements.style.display = 'none';
}
function display(className: string) {
    const elements = document.getElementsByClassName(className)[0] as HTMLElement;
    elements.style.display = 'block';
}
function show_popup(popup_name: string){
    display("mask");
    display("popup");
    display(popup_name);
}
function hide_popup(popup_name: string){
    hide("mask");
    hide("popup");
    hide(popup_name);
}
function addRadioButtons(){
    for (var i=1; i<=threadNumber; i++){
        var radioHtml = '<input type="radio" name="optradio" id="button-thread-' + i + '"/>'+ i;
        var elem = document.createElement('lable');
        elem.className= 'radio-inline';
        elem.innerHTML = radioHtml;
        (document.getElementById("settings-radiobuttons") as HTMLElement).appendChild(elem);
    }
}

window.onload = function() {
    addRadioButtons();
    (document.getElementById("button-settings") as HTMLElement).onclick = function(){
        show_popup("settings");
    };
    (document.getElementById("button-samples") as HTMLElement).onclick = function(){
        show_popup("samples");
    };
    (document.getElementById("button-info") as HTMLElement).onclick = function(){
        show_popup("info");
    };
    (document.getElementById("close-button-settings") as HTMLElement).onclick = function(){
        hide_popup("settings");
    };
    (document.getElementById("close-button-samples") as HTMLElement).onclick = function(){
        hide_popup("samples");
    };
    (document.getElementById("close-button-info") as HTMLElement).onclick = function(){
        hide_popup("info");
    };
    ////////////////////////////////////////////////////////
    (document.getElementById("button-thread-1") as HTMLElement).onclick = function(){
        threadNumber = 1;
    };
     (document.getElementById("button-thread-2") as HTMLElement).onclick = function(){
        threadNumber = 2;
    };
     (document.getElementById("button-thread-3") as HTMLElement).onclick = function(){
        threadNumber = 3;
    };
     (document.getElementById("button-thread-4") as HTMLElement).onclick = function(){
        threadNumber = 4;
    };
    (document.getElementById("save-button-settings") as HTMLElement).onclick = function(){
        var numb = getInputText("input-number-threads");
        if (numb != "") threadNumber = numb;
        hide_popup("settings");
    };
    (document.getElementById("button-sample-getpi") as HTMLElement).onclick = function(){
        insertTextInTextarea("input-textarea-1", sampleGetPi[0]);
        insertTextInTextarea("input-textarea-2", sampleGetPi[1]);
        insertTextInTextarea("input-textarea-3", sampleGetPi[2]);
        hide_popup("samples");
    };
    (document.getElementById("button-run") as HTMLElement).onclick = function(){
        var inputText1 = getInputText("input-textarea-1");
        var inputText2 = getInputText("input-textarea-2");
        var inputText3: string = getInputText("input-textarea-3");
        var lst:Array<string> = [inputText1,inputText2,inputText3];
        let worker = new CWorkers(lst, threadNumber);
        worker.run();
    };
    (document.getElementById("button-delete") as HTMLElement).onclick = function(){
        clearTextArea("input-textarea-1");
        clearTextArea("input-textarea-2");
        clearTextArea("input-textarea-3");
    };
    function insertTextInTextarea(textareaID: string, text: string){
        const elem: any = document.getElementById(textareaID);
        elem.value = text;
    }
    function getInputText(formId: string){
        const elem: any = document.getElementById(formId);
        return elem.value;
    };
    function clearTextArea(formId: string){
        const elem: any = document.getElementById(formId);
        elem.value = "";
    }
}
