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
    (document.getElementById("close-button-settings") as HTMLElement).onclick = function(){
        hide_popup("settings");
    };
    (document.getElementById("close-button-samples") as HTMLElement).onclick = function(){
        hide_popup("samples");
    };
    function getInputText(formId: string){
        const elem: any = document.getElementById(formId);
        return elem.value;
    };
    (document.getElementById("button-run") as HTMLElement).onclick = function(){
        var inputText = getInputText("input-textarea");
        let worker = new CWorkers(inputText);
    }
}