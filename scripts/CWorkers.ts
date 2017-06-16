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
        var worker: string = this.m_inputCode[1];
        var part2: string = this.m_inputCode[2];
        

        var workerCreateString = "var blob = new Blob([worker])\;\nvar blobURL = window.URL.createObjectURL(blob)\;\nvar worker = new Worker(blobURL)\;";

        var allCode: string = part1 +"\n"+ workerCreateString +"\n"+ part2;
        alert(allCode);
        eval(allCode);
    }
    private createWorker(workersCode){
        let workerList = [];
        for (let i=0;i<this.m_threadNumber;i++){

        }
    }
}