/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, type ReactNode } from "react";

import { mockCharacters } from "../data/mockCharacters";
import type { Character } from "../types/character";

type CharacterContextType = {
  characters: Character[];
  addCharacter: (character: Character) => void;
};

const CharacterContext = createContext<CharacterContextType | null>(null);

type CharacterProviderProps = {
  children: ReactNode;
};

export function CharacterProvider({ children }: CharacterProviderProps) {
  const [characters, setCharacters] = useState<Character[]>(mockCharacters);

  function addCharacter(character: Character): void {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  }

  return (
    <CharacterContext.Provider value={{ characters, addCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacters(): CharacterContextType {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error("useCharacters must be used inside CharacterProvider");
  }

  return context;
}
