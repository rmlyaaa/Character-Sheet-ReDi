import { useState } from "react";
import { type AttributeRollResult, useDiceRoll } from "../hooks/useDiceRoll";

import type { Attribute } from "../types/character";
import RollModal from "./RollModal";

type CharacteristicsProps = { attributes: Attribute[] };

export const Characteristics = ({ attributes }: CharacteristicsProps) => {
  const { rollAttribute } = useDiceRoll();
  const [lastRoll, setLastRoll] = useState<AttributeRollResult | null>(null);

  return (
    <div className="char-point">
      {attributes.map((attribute) => (
        <a
          className="point"
          key={attribute.name}
          onClick={() =>
            setLastRoll(rollAttribute(attribute.name, attribute.value))
          }
        >
          <h2> {attribute.value} </h2>
          <p> {attribute.name} </p>
        </a>
      ))}

      {lastRoll && (
        <RollModal onClose={() => setLastRoll(null)}>
          <p> {lastRoll.attributeName} </p>
          <p>
            {lastRoll.dice} VS {lastRoll.target}
          </p>
          <h2> {lastRoll.success ? "Succes" : "Fail"} </h2>
        </RollModal>
      )}
    </div>
  );
};
