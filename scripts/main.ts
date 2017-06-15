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


window.onload = function() {
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
    function getInputText(formId: string){
        const elem: any = document.getElementById(formId);
        return elem.value;
    };
    function clearTextArea(formId: string){
        const elem: any = document.getElementById(formId);
        elem.value = "";
    }
    (document.getElementById("button-run") as HTMLElement).onclick = function(){
        var inputText1 = getInputText("input-textarea-1");
        var inputText2 = getInputText("input-textarea-2");
        var inputText3 = getInputText("input-textarea-3");
        var lst:Array<string> = [inputText1,inputText2,inputText3];
        let worker = new CWorkers(lst);
    };
    (document.getElementById("button-delete") as HTMLElement).onclick = function(){
        clearTextArea("input-textarea-1");
        clearTextArea("input-textarea-2");
        clearTextArea("input-textarea-3");
    }
}