import { IData } from "../domain/Data";

interface IRepository {
    read(): Array<IData>;
}

export { IRepository };