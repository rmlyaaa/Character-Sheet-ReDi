import { useCharacters } from "../context/CharacterContext";
import { Card } from "../components/Card";

export const Home = () => {
  const { characters } = useCharacters();
  return (
    <>
      <section className="hero">
        <div className="title">
          <h1>Welcome</h1>
          <h4>here you can find all your characters!</h4>
        </div>
        <div className="divider" />
        <div className="char-cont">
          {characters.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </section>
    </>
  );
};
