import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface ILoginClient {
  password: string;
  username: string;
}

export class AuthenticateClientUseCase {
  async execute({ password, username }: ILoginClient) {
    //Receber a senha e password

    // Verificar Cliente Existe
    const client = await prisma.clients.findFirst({
      where: { username },
    });
    if (!client) {
      throw new Error("Username invalido");
    }
    //Verificar se a senha está correta
    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) {
      throw new Error("Senha invalida");
    }

    //Gerar umm token

    const token = sign({ username }, "chavesecreta", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
