import fetch from "node-fetch";

export const basePath = "https://pokeapi.co/api/v2";
export const pokemonInfo = "/pokemon";
export const pokedex = "/pokedex";

export const getAllPokemon = async () => {
  const res = await fetch(`${basePath}${pokemonInfo}?limit=9000&offset=000`);
  return await res.json();
};

export const getPokemonGen = async (generation?: string) => {
  const res = await fetch(`${basePath}${pokedex}/${generation || "2"}`);
  return await res.json();
};

export const getOnePokemon = async (name: string) => {
  const res = await fetch(`${basePath}${pokemonInfo}/${name}`);

  return await res.json();
};
