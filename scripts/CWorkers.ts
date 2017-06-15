class CWorkers {
    private m_threadNumber: number;
    private m_inputCode: Array<string>;

    constructor(inputText:Array<string>){
        this.m_inputCode = inputText;
        alert(this.m_inputCode);
    };
    public getThreadNumber(){
        return this.m_threadNumber;
    }
    public setThreadNumber(value: number){
        this.m_threadNumber = value;
    }
    public run(){
    };


    private parseCode(){
        let strIn = this.m_inputCode;
        var part1 = "";
        var worker = "";
        var part2 = "";
    }
}