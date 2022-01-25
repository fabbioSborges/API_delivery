import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface ILoginDeliveryman {
  password: string;
  username: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: ILoginDeliveryman) {
    //Receber a senha e password

    // Verificar Cliente Existe
    const deliveryman = await prisma.deliveryman.findFirst({
      where: { username },
    });
    if (!deliveryman) {
      throw new Error("Username invalido");
    }
    //Verificar se a senha está correta
    const passwordMatch = await compare(password, deliveryman.password);
    if (!passwordMatch) {
      throw new Error("Senha invalida");
    }

    //Gerar umm token

    const token = sign({ username }, "chavesecretadeliveryman", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
