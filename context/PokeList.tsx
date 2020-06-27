import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext([]);

export default function ListProvider({ children, value }) {
  const [pkmnList, setPkmnList] = useState(value);

  return (
    <PokemonContext.Provider
      value={{
        pkmnList,
        setPkmnList,
      }}
    >
      <main>{children}</main>
    </PokemonContext.Provider>
  );
}

export const usePkmnContext = () => {
  const context = useContext(PokemonContext);
  const { pkmnList, setPkmnList }: any = context;
  return { pkmnList, setPkmnList };
};
