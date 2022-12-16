import { Request, Response } from "express";

import { IUseCases } from "../use_cases/IUseCases";

class Data_Controller {
    data_usecase: IUseCases;

    constructor(data_usecase: IUseCases) {
        console.log(typeof data_usecase);
        console.log(data_usecase);

        this.data_usecase = data_usecase;
    }

    list_data(req: Request, resp: Response) {
        const data = this.data_usecase.retrieveData();
        return resp.status(200).json(data);
    }
}

export { Data_Controller };