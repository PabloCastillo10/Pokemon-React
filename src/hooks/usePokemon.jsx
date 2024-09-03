import { useState } from "react"
import { reqPokemon } from "../services/pokemon"

export const usePokemon = () => {

    const [pokemon, setPokemon] = useState(null)

    const handleGetPokemon = (e, pokemonName) => {
        e.preventDefault()
        reqPokemon(pokemonName).then((pokemonData) => {
            setPokemon(pokemonData)
        }).catch(err => {
            console.error(err)
            setPokemon(null) 
        })
    }

    return {
        handleGetPokemon,
        pokemon
    }
}
