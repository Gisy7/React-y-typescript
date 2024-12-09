import React, { useState } from 'react'
import { useStoreApp } from '../store/useStoreApp'
import DrinkCard from '../components/DrinkCard'


function IndexPageView() {

  const drinks = useStoreApp(state => state.drinks)

  return (
    <>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {drinks.drinks &&
          drinks.drinks?.map((drink) => {
            return <DrinkCard 
              key={drink.idDrink} 
              drink={drink} />
          })}
      </section>

      

      {!drinks.drinks && <p className="font-semibold text-3xl">No se han encontrado resultados</p>}
    </>


  )
}

export default IndexPageView