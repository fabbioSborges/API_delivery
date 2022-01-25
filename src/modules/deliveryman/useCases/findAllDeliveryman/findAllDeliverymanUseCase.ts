import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    /* const result = await prisma.deliveries.findMany({
      where: { id_deliveryman: id_deliveryman },
      select: { item_name: true },
    }); */
    const result = await prisma.deliveryman.findMany({
      where: { id: id_deliveryman },
      select: { username: true, Deliveries: true },
    });
    return result;
  }
}
