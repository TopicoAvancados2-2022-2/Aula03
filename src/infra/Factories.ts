import { Data_Controller } from "../controller/Data_Controller";
import { DataRepository } from "../repository/DataRepository";
import { DataUseCase } from "../use_cases/DataUseCase";

function createRepositoryFactory() {
    const repo = new DataRepository();
    return repo;
}

function createUseCaseFactory() {
    const repo = createRepositoryFactory();
    const useCase = new DataUseCase(repo);

    return useCase;
}

function createControllerFactory() {
    const useCase = createUseCaseFactory();
    const controller = new Data_Controller(useCase);

    return controller;
}

export { createUseCaseFactory, createRepositoryFactory, createControllerFactory };