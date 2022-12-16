interface IData {
    msg: string;
}

class Data implements IData {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }
}

export { IData, Data };