import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "../page.module.css";

export default function AddGamePage() {
  async function handleAddGame(formData) {
    "use server";

    console.log("form action done");

    const name = formData.get("name");
    const creator = formData.get("pulisher");
    const rating = formData.get("date");

    await db.query(
      `INSERT INTO games (name, publisher, date) VALUES ($1, $2, $3)`,
      [name, publiser, date]
    );

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="game">
      <h2 className="title">Add Game</h2>
      <form action={handleAddGame}>
        <div className="form">
          <input name="name" placeholder="Name" />
          <input name="publisher" placeholder="Publisherr" />
          <input name="date" placeholder="Date" type="number" />
          <button className="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}
