import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import {
  getAllPokemon,
  getIndividualPokemons
} from '../helper/pokemonFunctions'

export const PokemonContext = createContext()
const PokemonApp = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [pokemons, setPokemons] = useState()
  const [selectedPokemon, setSelectedPokemon] = useState()
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(url)
      let pokemon = await loadPokemon(response.results)
    }
    fetchData()
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonData = await getIndividualPokemons(pokemon.url)

        return pokemonData
      })
    )
    setPokemons(_pokemonData)
  }

  const addPokemonToFavorire = (pokemon) => {
    pokemon.isFav = true
    const newFavList = (favorites, pokemon)
    setFavorites(newFavList)
  }
  const removePokemonToFavorite = (pokemon) => {
    pokemon.isFav = false
    //TODO: neye gore filter edecez o onemli ama id mantikli gibi
    pokemons.filter((el) => el.id !== pokemon.id)
  }
  const showDetail = (id) => {
    //gelen id ye gore pokemonu secip buradan detail sayfasina gonderecez
  }
  const FavoriteHandler = (pokemon, e) => {
    e.preventDefault()
    if (favorites.includes(pokemon)) {
      removePokemonToFavorite(pokemon)
    } else {
      addPokemonToFavorire(pokemon)
    }
  }

  const getPokemonDetail = async (url, e) => {
    e.preventDefault()
    const response = await axios.get(url)
    const data = response.data
    setSelectedPokemon(data)
  }
  return (
    <PokemonContext.Provider
      value={{
        favorites,
        pokemons,
        selectedPokemon,
        showDetail,
        FavoriteHandler,
        getPokemonDetail
      }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonApp
