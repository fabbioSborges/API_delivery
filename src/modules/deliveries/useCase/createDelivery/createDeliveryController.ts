import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    //console.log(req.id_client);
    const { item_name } = req.body;
    const { id_client } = req;
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute({
      item_name,
      id_client,
    });
    return res.json(result);
  }
}
