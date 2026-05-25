import { Link } from "react-router";
import { Characteristics } from "../components/Characteristics";
import { Skills } from "../components/Skills";
import { Weapons } from "../components/Weapons";
import { Inventory } from "../components/Inventory";

import { useParams } from "react-router";
import { mockCharacters } from "../data/mockCharacters";

import { Pencil } from "lucide-react";

export const Character = () => {
  const { id } = useParams();

  const character = mockCharacters.find((char) => char.id === id);

  if (!character) {
    return <p>Not found</p>;
  }

  return (
    <div className="layout">
      <nav>
        <Link to="/" className="link-reset">
          / Home
        </Link>
      </nav>
      <section className="info-cont">
        <div>
          <div className="info-head">
            <h1>{character.name}</h1>
            <button>
              <Pencil className="icon" />
            </button>
          </div>
          <p> {character.desc} </p>
        </div>
        <div className="point-cont">
          <div className="point">
            <h2> {character.up} </h2>
            <p>UP</p>
          </div>
          <div className="point">
            <h2> {character.dip} </h2>
            <p>DIP</p>
          </div>
        </div>
      </section>
      <section className="stats-cont">
        <Characteristics attributes={character.attributes} />
        <Skills skills={character.skills} />
        <div className="inv-cont">
          <Weapons weapons={character.weapons} />
          <Inventory inventory={character.inventory} />
        </div>
      </section>
    </div>
  );
};
