function hide(className: string){
    const elements = document.getElementsByClassName(className)[0] as HTMLElement;
    elements.style.display = 'none';
}
function display(className: string) {
    const elements = document.getElementsByClassName(className)[0] as HTMLElement;
    elements.style.display = 'block';
}


window.onload = function() {
    (document.getElementById("button-settings") as HTMLElement).onclick = function(){
        display("mask");
        display("popup");
        display("settings");
    };
    (document.getElementById("button-samples") as HTMLElement).onclick = function(){
        display("mask");
        display("popup");
        display("samples");
    };
    (document.getElementById("close-button-settings") as HTMLElement).onclick = function(){
        hide("mask");
        hide("popup");
        hide("settings");
    };
    (document.getElementById("close-button-samples") as HTMLElement).onclick = function(){
        hide("mask");
        hide("popup");
        hide("samples");
    }
}