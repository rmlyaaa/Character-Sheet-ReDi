export type SkillRollResult = {
  skillName: string;

  playerDice: number;
  enemyDice: number;

  skillBonus: number;

  playerTotal: number;
  enemyTotal: number;

  difference: number;

  success: boolean;
};

export type AttributeRollResult = {
  attributeName: string;
  dice: number;
  target: number;
  success: boolean;
};

export function useDiceRoll() {
  function rollSkill(skillName: string, skillValue: number): SkillRollResult {
    const playerDice = Math.floor(Math.random() * 100) + 1;
    const enemyDice = Math.floor(Math.random() * 100) + 1;

    const skillBonus = skillValue * 10;

    const playerTotal = playerDice + skillBonus;
    const enemyTotal = enemyDice;

    const difference = playerTotal - enemyTotal;

    return {
      skillName,

      playerDice,
      enemyDice,

      skillBonus,

      playerTotal,
      enemyTotal,

      difference,

      success: difference >= 0,
    };
  }

  function rollAttribute(
    attributeName: string,
    attributeValue: number,
  ): AttributeRollResult {
    const dice = Math.floor(Math.random() * 20) + 1;
    const success = dice <= attributeValue;

    return {
      attributeName,
      dice,
      target: attributeValue,
      success,
    };
  }

  return { rollSkill, rollAttribute };
}
