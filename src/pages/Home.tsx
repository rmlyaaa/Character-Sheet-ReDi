import { mockCharacters } from "../data/mockCharacters";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="title">
          <h1>Welcome</h1>
          <h4>here you can find all your characters!</h4>
        </div>
        <div className="divider" />
        <div className="char-cont">
          {mockCharacters.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </section>
    </>
  );
};
