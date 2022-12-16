import { IData, Data } from "../domain/Data";
import { IRepository } from "../repository/IRepository";
import { IUseCases } from "./IUseCases";

class DataUseCase implements IUseCases {
    repo: IRepository;
    data: Data;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    retrieveData(): IData {
        const data = new Data('Yowzah!');
        
        return data;
    }
}

export { DataUseCase };