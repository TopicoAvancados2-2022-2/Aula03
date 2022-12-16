import { IData } from "../domain/Data";
import { IRepository } from "./IRepository";

class DataRepository implements IRepository {
    read(): Array<IData> {
        const list = new Array<IData>;

        return list;
    }
}

export { DataRepository };