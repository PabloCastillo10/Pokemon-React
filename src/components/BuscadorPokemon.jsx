import { useState } from "react"

export const BuscarPokemon = ({ handleGetPokemon }) => {

    const [pokemonName, setPokemonName] = useState('')

    return (
        <div className="d-flex flex-row justify-content-center align-items-center mt-3" class="p-3 mb-2 bg-info text-dark">
            <form className="d-flex" onSubmit={(e) => { handleGetPokemon(e, pokemonName) }}>
                <input 
                    type="text" 
                    className="form-control me-2" 
                    onChange={(e) => { setPokemonName(e.target.value) }} 
                    placeholder="Ingresa el nombre o ID del Pokémon"
                />
                <input type="submit" value='Buscar' className="btn btn-outline-success" />
            </form>
        </div>
    )
}
