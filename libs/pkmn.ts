import fetch from "node-fetch";

export const basePath = "https://pokeapi.co/api/v2";
export const pokemonInfo = "/pokemon";
export const pokedex = "/pokedex";
export const generation = "/generation";
export const pokemonSpecies = "/pokemon-species";
export const evolutionChain = "/evolution-chain";

export const getPokemonGen = async (value?: string) => {
  const res = await fetch(`${basePath}${generation}/${value || "1"}`);
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

export const getInitialData = async (value: string) => {
  const { pokemon_species } = await getPokemonGen(value);
  const pokemonList = {
    info: await Promise.all(
        pokemon_species.map(({ name } ) =>
        getOnePokemon(name)
      )
    ),
  };
  return pokemonList.info.sort((a: any,b: any) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
};

export const getStaticPahs = async (value: string) => {
  const { pokemon_species } = await getPokemonGen(value);
  const paths = pokemon_species.map(({ entry_number }, index) => ({
    params: { pkmn: String(index + 1) },
  }));

  return paths;
};

export const getDetailProps = async (value: string) => {
  const [pokemon, evoChain, species] = await Promise.all([
    await getOnePokemon(value),
    await getEvolutionChainPokemon(value),
    await getSpeciesPokemon(value),
  ]);

  return {
    pokemon,
    evoChain,
    species
  };
};
