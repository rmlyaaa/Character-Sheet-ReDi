import { Link } from "react-router";
import { Characteristics } from "../components/Characteristics";
import { Skills } from "../components/Skills";
import { Weapons } from "../components/Weapons";
import { Inventory } from "../components/Inventory";
import { Health } from "../components/Health";

export const Character = () => {
  return (
    <div className="layout">
      <nav>
        <Link to="/" className="link-reset">
          / Home
        </Link>
      </nav>
      <section className="info-cont">
        <div>
          <h1>
            Goldhair <span className="up-count">/ 120</span>{" "}
          </h1>
          <p>Lagriss daughter / 16 yo / pirate ship captain</p>
        </div>
        <div className="point-cont">
          <div className="point">
            <h2>0</h2>
            <p>UP</p>
          </div>
          <div className="point">
            <h2>4</h2>
            <p>DIP</p>
          </div>
        </div>
      </section>
      <section className="stats-cont">
        <Characteristics />
        <Skills />
        <div className="inv-cont">
          <Weapons />
          <Inventory />
        </div>
        <Health />
      </section>
    </div>
  );
};
