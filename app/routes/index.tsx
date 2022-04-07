
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Note } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { notes: Array<Note> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    notes: await db.note.findMany(),
  };
  return json(data);
};
export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix Heroku</h1>
      <p> Notes: </p>
      <ul>
        {data.notes.map(({ id, name }) => ( <li key={name}>id: {id} name: {name}</li>))}
      </ul>
      
      
    </div>
  );
}
