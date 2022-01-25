import { Request, Response } from "express";
import { UpdateDeliveryUseCase } from "./updateDeliveryUseCase";

export class UpdateDeliveryController {
  async handle(req: Request, res: Response) {
    const { id_delivery } = req.params;
    const { id_deliveryman } = req;
    const updateDeliveryUseCase = new UpdateDeliveryUseCase();
    const result = await updateDeliveryUseCase.execute({
      id_delivery,
      id_deliveryman,
    });

    return res.json(result);
  }
}
