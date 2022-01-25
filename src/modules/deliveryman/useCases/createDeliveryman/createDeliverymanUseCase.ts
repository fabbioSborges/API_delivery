import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryman {
  password: string;
  username: string;
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    //verificar se o usuario existe
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
    if (deliverymanExists) {
      throw new Error(`Deliveryman já cadastardo com o username: ${username}`);
    }

    // criptografar senha
    const passwordHash = await hash(password, 8);

    //criar usuario

    const deliveryman = await prisma.deliveryman.create({
      data: {
        password: passwordHash,
        username,
      },
    });
    return deliveryman;
  }
}
