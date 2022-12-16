import { Request, Response } from "express";

import { IUseCases } from "../use_cases/IUseCases";

class Data_Controller {
    data_usecase: IUseCases;

    constructor(data_usecase: IUseCases) {
        console.log("Data Usecase Info:\n====\n" + typeof data_usecase);
        console.log(data_usecase);
        console.log("===\n\n");

        this.data_usecase = data_usecase;
        console.log(this.data_usecase);
        console.log(this.data_usecase.retrieveData());
        console.log("====\n\n");
    }

    list_data(req: Request, resp: Response) {
        console.log("entering list_data");
        console.log(this);
        if (this === undefined)
            return resp.status(400);

        const data = this.data_usecase.retrieveData();
        return resp.status(200).json(data);
    }
}

export { Data_Controller };