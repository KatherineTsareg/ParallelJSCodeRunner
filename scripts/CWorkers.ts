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
        var part1: string = this.m_inputCode[0];
        var worker: string = this.m_inputCode[1];
        var part2: string = this.m_inputCode[3];
    };
}