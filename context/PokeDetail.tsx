import React, { createContext, useState, useContext } from "react";

const PokemonDetailContext = createContext({});

export default function ListProvider({ children, value }) {
  const [pkmnDetail, setPkmnDetail] = useState(value);

  return (
    <PokemonDetailContext.Provider
      value={{
        pkmnDetail,
        setPkmnDetail,
      }}
    >
      <main>{children}</main>
    </PokemonDetailContext.Provider>
  );
}

export const useDetailContext = () => {
  const context = useContext(PokemonDetailContext);
  const { pkmnDetail, setPkmnDetail }: any = context;
  return { pkmnDetail, setPkmnDetail };
};
