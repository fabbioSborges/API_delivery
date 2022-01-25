import { prisma } from "../../../../database/prismaClient";

export class FindAllWithoutDeliverymanUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: { id_deliveryman: null },
    });
    return deliveries;
  }
}
