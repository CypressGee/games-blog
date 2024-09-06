import { db } from "@/lib/db";
import Link from "next/link";

export default async function Home({ searchParams }) {
  console.log("searchParams", searchParams);
  const result = await db.query("SELECT * FROM games");
  const games = result.rows;

  if (searchParams.sort === "desc") {
    games.reverse();
  }

  return (
    <div>
      <h1 className="title">Games Posts</h1>
      <br />
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <Link className="order" href="/?sort=asc">
          Sort asc
        </Link>
        <br />
        <Link className="order" href="/?sort=desc">
          Sort desc
        </Link>
      </div>
      {games.map((game) => {
        return (
          <div key={game.id} className="gameOutput">
            <div>
              ID: {game.id} - {game.name} - {game.publisher} - {game.date} -{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
