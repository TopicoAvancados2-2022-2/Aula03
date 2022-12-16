import { IData } from "../domain/Data";

interface IUseCases {
    retrieveData(): IData;
}

export { IUseCases }