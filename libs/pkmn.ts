import fetch from "node-fetch";

export const basePath = "https://pokeapi.co/api/v2";
export const pokemonInfo = "/pokemon";
export const pokedex = "/pokedex";
export const pokemonSpecies = "/pokemon-species";
export const evolutionChain = "/evolution-chain";

export const getAllPokemon = async () => {
  const res = await fetch(`${basePath}${pokemonInfo}?limit=251&offset=000`);
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

export const getEvolutionChainPokemon = async (value: string) => {
  const res = await fetch(`${basePath}${evolutionChain}/${value}`);

  return await res.json();
};

export const getSpeciesPokemon = async (value: string) => {
  const res = await fetch(`${basePath}${pokemonSpecies}/${value}`);

  return await res.json();
};
