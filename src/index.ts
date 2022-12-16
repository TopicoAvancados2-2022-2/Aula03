import express, { Router, Request, Response } from "express";

import { createControllerFactory } from "./infra/Factories";

const app = express();

const route = Router();
const dataController = createControllerFactory();

route.get("/data", dataController.list_data);
route.get("/testing", (req: Request, res: Response) => {  res.json({message: 'batata'}) });

app.use(express.json());
app.use(route);

app.listen(3100, () => {
    console.log('connected at port 3100')
})