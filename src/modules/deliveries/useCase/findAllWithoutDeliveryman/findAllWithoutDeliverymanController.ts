import { Request, Response } from "express";
import { FindAllWithoutDeliverymanUseCase } from "./findAllWithoutDeliverymanUseCase";

export class FindAllWithoutDeliverymanController {
  async handle(req: Request, res: Response) {
    const findAllWithoutDeliverymanUseCase =
      new FindAllWithoutDeliverymanUseCase();
    const result = await findAllWithoutDeliverymanUseCase.execute();

    return res.json(result);
  }
}
