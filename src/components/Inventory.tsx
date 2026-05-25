import type { InventoryItem } from "../types/character";

import { AddButton } from "./AddButton";

type InventoryProps = {
  inventory: InventoryItem[];
};

export const Inventory = ({ inventory }: InventoryProps) => {
  return (
    <div className="weap-cont">
      <h5>INVENTORY</h5>
      <ul className="skill-list">
        {inventory.map((item) => (
          <li className="skill-item">
            <p> {item.name} </p> <h4> {item.quantity} </h4>
          </li>
        ))}
      </ul>
      <AddButton />
    </div>
  );
};
