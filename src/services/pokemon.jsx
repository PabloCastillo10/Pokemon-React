export const reqPokemon = async (pokemonName) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = await resp.json()
        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}
