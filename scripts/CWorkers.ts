class CWorkers {
    private m_threadNumber: number;
    private m_inputCode: Array<string>;

    constructor(inputText:Array<string>, threadsNumber: number){
        this.m_inputCode = inputText;
        this.m_threadNumber = threadsNumber;
    };
    public getThreadNumber(){
        return this.m_threadNumber;
    }
    public setThreadNumber(value: number){
        this.m_threadNumber = value;
    }
     
    public run(){
        var part1: string = this.m_inputCode[0];
        var workerString: string = this.m_inputCode[1];
        var part2: string = this.m_inputCode[2];
        var postmessageParam = this.getPostmessageParam(part2);
        var onmessageCode = this.getOnmessageCode(part2);
        //множество воркеров
        var insertTextString = "(document.getElementById('result-field')).value = 'Common result: ' + pi;";
        var manyWorkersCreating = "var workerList = []\;\nfor (var i = 0; i < this.m_threadNumber; i++) \{\n    var blob = new Blob([workerString])\;\n    var blobURL = window.URL.createObjectURL(blob)\;\n    var newWorker = new Worker(blobURL)\;\n    workerList.push(newWorker)\;\n}";
        var paralInputParameter:string = this.editPostMessageParameter(part2);
        var callWorkers = "for (var i=0; i<this.m_threadNumber;i++){\n     var worker = workerList[i];\n" +  this.insertHtml(paralInputParameter, insertTextString) + "\n\}\;";

        

        var manyWorkerAllCode = part1 +"\n"+ manyWorkersCreating +"\n"+ callWorkers;
        alert(manyWorkerAllCode);
        eval(manyWorkerAllCode);
        //window.console.log(a);
    }

    private editPostMessageParameter(codeStr:string):string{

        var substr:any = codeStr.match(/\.postMessage\(\w+/gi);
        return codeStr.replace(substr, substr+"/"+this.m_threadNumber);
    }
    private getOnmessageCode(codeStr: string){
        var subList = codeStr.split(/{|}/);
        for (var i = 0; i < subList.length; i++){
            if (subList[i].search(/\.postMessage/gi) != -1) return subList[i+1];
        }
    }
    private getPostmessageParam(codeStr: string){
        var begin = codeStr.search(/\.postMessage\(\b\w+\b\)/);
        var paramAndAllString = (codeStr.substring(begin+13));
        return paramAndAllString.match(/\b\w+\b/);
    }
    private codeWithoutOnmessage(codeStr: string){
        var subList = codeStr.split(/\;/g);
        var result = "";
        for (var i = 0; i < subList.length; i++){
            if ((subList[i].search(/\.onmessage/gi) === -1) && (subList[i].length > 0))
            { 
                result+=(subList[i]+";");
                i = i+2;
            }
        }
        return result;
    }
    private insertHtml(codeStr: string, insertText: string){
        var res = "";
        var subList = codeStr.split(/\}/);

        for (var i = 0; i < subList.length; i++){
            res += subList[i];
            if (subList[i].search(/onmessage/g) != -1) res +=(insertText +"}");
        }
        return res;
    }
}