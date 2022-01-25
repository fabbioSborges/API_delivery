import { Request, Response } from "express";
import { FindAllDeliverymanUseCase } from "./findAllDeliverymanUseCase";

export class FindAllDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;
    const findAllDeliverymanUseCase = new FindAllDeliverymanUseCase();
    const result = await findAllDeliverymanUseCase.execute(id_deliveryman);

    return res.json(result);
  }
}
