import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({
  request,
}) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");
  // we do this type check to be extra sure and to make TypeScript happy
  if (
    typeof name !== "string" ||
    typeof content !== "string"
  ) {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, content };

  await db.note.create({ data: fields });
  return redirect(`/`);
};


export default function NewNote() {
    return (
      <div>
        <p>Add your own note</p>
        <form method="post">
          <div>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Content: <textarea name="content" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }