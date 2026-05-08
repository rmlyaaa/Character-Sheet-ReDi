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
        <Card />
      </section>
    </>
  );
};
