import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    return db.note.create({ data: { name: "Note from the databae" }});
}

seed();
