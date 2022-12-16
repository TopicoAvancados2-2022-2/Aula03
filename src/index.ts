import express, { Router, Request, Response } from "express";

import { createControllerFactory } from "./infra/Factories";

const app = express();

const route = Router();
const dataController = createControllerFactory();

route.get("/data", (req: Request, res: Response) => { dataController.list_data(req, res) });

app.use(express.json());
app.use(route);

app.listen(3100, () => {
    console.log('connected at port 3100')
})