import { useStoreApp } from "../store/useStoreApp"
import { drink } from "../types/index"

function DrinkCard({ drink }: { drink: drink }) {


    const selectRecipe = useStoreApp(state => state.selectRecipe)


    return (

        <>
            <div key={drink.idDrink} className=' bg-white shadow-xl'>

                <div className="overflow-hidden">
                    <img
                        src={drink.strDrinkThumb}
                        alt="drinksThumb"
                        className=" hover:rotate-2 hover:scale-110 transition-all"
                    />
                </div>


                <div className="p-6 space-y-3">
                    <p className="font-bold truncate text-lg">{drink.strDrink}</p>
                    <button className="bg-orange-400 w-full text-white font-bold py-2 hover:bg-orange-500"
                        onClick={() => {
                            selectRecipe(drink.idDrink)
                        }}>Ver Receta</button>
                </div>

            </div>


        </>

    )
}

export default DrinkCard