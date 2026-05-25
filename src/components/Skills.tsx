import { useState } from "react";
import { useDiceRoll, type SkillRollResult } from "../hooks/useDiceRoll";

import type { Skill } from "../types/character";

import { AddButton } from "./AddButton";
import RollModal from "./RollModal";

type SkillProp = {
  skills: Skill[];
};

export const Skills = ({ skills }: SkillProp) => {
  const { rollSkill } = useDiceRoll();
  const [lastRoll, setLastRoll] = useState<SkillRollResult | null>(null);

  return (
    <div className="skill-cont">
      <h5>SKILLS</h5>{" "}
      <ul className="skill-list">
        {skills.map((skill) => (
          <li>
            <a
              className="skill-item"
              onClick={() => setLastRoll(rollSkill(skill.name, skill.value))}
            >
              <p>{skill.name}</p> <h4>{skill.value}</h4>
            </a>
          </li>
        ))}
      </ul>
      {lastRoll && (
        <RollModal onClose={() => setLastRoll(null)}>
          <p>
            {lastRoll.playerDice} + {lastRoll.skillBonus} VS{" "}
            {lastRoll.enemyDice}
          </p>
          <h2> {lastRoll.success ? "Success" : "Fail"} </h2>
        </RollModal>
      )}
      <AddButton />
    </div>
  );
};
