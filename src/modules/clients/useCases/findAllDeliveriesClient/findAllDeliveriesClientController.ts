import { Request, Response } from "express";
import { FindAllDeliveriesClientUseCase } from "./findAllDeliveriesClientUseCase";

export class FindAllDeliveriesClientController {
  async handle(req: Request, res: Response) {
    const { id_client } = req;
    const findAllDeliveriesClientUseCase = new FindAllDeliveriesClientUseCase();
    console.log(id_client);
    const result = await findAllDeliveriesClientUseCase.execute(id_client);
    return res.json(result);
  }
}
