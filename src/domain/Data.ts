interface IData {
    msg: string;
}

class Data implements IData {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    
    public get getMsg() : string {
        return this.msg;
    }
    
}

export { IData, Data };