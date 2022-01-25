import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesClientUseCase {
  async execute(id_client: string) {
    const result = await prisma.clients.findMany({
      where: { id: id_client },
      select: { username: true, Deliveries: true },
    });
    return result;
  }
}
