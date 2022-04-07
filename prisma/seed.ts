import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    return db.note.create({ data: { name: "Note from the databae", content: " I am a new note :) " }});
}

seed();
