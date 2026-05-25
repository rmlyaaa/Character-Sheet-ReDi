export type Attribute = {
  name: string;
  value: number;
};

export type Skill = {
  name: string;
  value: number;
};

export type Weapon = {
  name: string;
  damage: number;
};

export type InventoryItem = {
  name: string;
  quantity: number;
};

export type Character = {
  id: string;
  name: string;
  desc: string;
  up: number;
  dip: number;
  attributes: Attribute[];
  skills: Skill[];
  weapons: Weapon[];
  inventory: InventoryItem[];
};
