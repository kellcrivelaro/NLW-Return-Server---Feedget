import { PrismaClient } from "@prisma/client";

//configuração log['query'] faz com que qualquer query feita pelo prisma seja exibida no log
export const prisma = new PrismaClient({
  log: ["query"],
});
