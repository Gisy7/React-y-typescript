import React from 'react'
import { useStoreApp } from '../store/useStoreApp'
import DrinkCard from '../components/DrinkCard'

function FavoritePage() {

  const favorites = useStoreApp(state => state.favorites)

  return (

    <>
      <h1 className='text-3xl pb-4'>Favoritos</h1>

      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {favorites.map((favorite) => {
          return <DrinkCard key={favorite.idDrink} drink={favorite} />
        })}
      </section>

      {!favorites && <p className="font-semibold text-3xl">No hay nada en favoritoss</p>}

    </>
  )
}

export default FavoritePage