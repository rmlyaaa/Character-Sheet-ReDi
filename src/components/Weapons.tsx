import type { Weapon } from "../types/character";

import { AddButton } from "./AddButton";

type WeaponProp = {
  weapons: Weapon[];
};

export const Weapons = ({ weapons }: WeaponProp) => {
  return (
    <div className="weap-cont">
      <h5>WEAPONS</h5>
      <ul className="skill-list">
        {weapons.map((weapon) => (
          <li className="skill-item">
            <p>{weapon.name}</p> <h4>{weapon.damage} dmg</h4>
          </li>
        ))}
      </ul>
      <AddButton />{" "}
    </div>
  );
};
