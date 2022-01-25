import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  password: string;
  username: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    //verificar se o usuario existe
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
    if (clientExists) {
      throw new Error(`Cliente já cadastardo com o username: ${username}`);
    }

    // criptografar senha
    const passwordHash = await hash(password, 8);

    //criar usuario

    const client = await prisma.clients.create({
      data: {
        password: passwordHash,
        username,
      },
    });
    return client;
  }
}
