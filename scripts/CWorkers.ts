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

        //множество воркеров
        var manyWorkersCreating = "var workerList = []\;\nfor (var i = 0; i < this.m_threadNumber; i++) \{\n    var blob = new Blob([workerString])\;\n    var blobURL = window.URL.createObjectURL(blob)\;\n    var newWorker = new Worker(blobURL)\;\n    workerList.push(newWorker)\;\n}";
        var paralInputParameter:string = this.editPostMessageParameter(part2);
        var callWorkers = "for (var i=0; i<this.m_threadNumber;i++){\n     var worker = workerList[i];\n" +  paralInputParameter + "\n\};";

        var manyWorkerAllCode = part1 +"\n"+ manyWorkersCreating +"\n"+ callWorkers;
        alert(manyWorkerAllCode);
        let a = (eval(manyWorkerAllCode));
        window.console.log(a);
    }

    private editPostMessageParameter(codeStr:string):string{

        var substr:any = codeStr.match(/\.postMessage\(\w+/gi);
        return codeStr.replace(substr, substr+"/"+this.m_threadNumber);
    }
}