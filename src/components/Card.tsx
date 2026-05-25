import type { Character } from "../types/character";
import { Link } from "react-router";

type CharacterProp = {
  character: Character;
};

export const Card = ({ character }: CharacterProp) => {
  return (
    <Link to={`/character/${character.id}`} className="link-reset">
      <div className="card">
        <img src="/src/assets/placeholder.png" alt="" />
        <p>{character.name}</p>
      </div>
    </Link>
  );
};
