import React from 'react'
import Card from '../Card'
import { PokemonContext } from '../../Context/PokemonContext'

const Index = () => {
  const { pokemons } = React.useContext(PokemonContext)

  return (
    <div className="container-fluid">
      <div className="row px-4">
        {pokemons &&
          pokemons.map((pokemon) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mt-4">
                <Card pokemon={pokemon} key={pokemon.url} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Index
