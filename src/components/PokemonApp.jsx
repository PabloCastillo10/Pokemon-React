import { BuscarPokemon } from "./BuscadorPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"
import { usePokemon } from "../hooks/usePokemon"

export const PokemonApp = () => {

    const { handleGetPokemon, pokemon } = usePokemon()

    return (
        <>
            <BuscarPokemon handleGetPokemon={handleGetPokemon} />
            <ContenedorPokemon pokemon={pokemon} />
        </>
    )
}
