class CWorkers {
    private m_threadNumber: number;
    private m_inputCode: string;

    constructor(inputText:string){
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
}