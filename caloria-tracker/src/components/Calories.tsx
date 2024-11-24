import useActivity from "../hooks/useActivity";
import { activity } from "../types"
import CaloriesDisplay from './CaloriesDisplay';


type Calories = {
    activities: activity[]
}



export default function Calories() {

    const { totalCalories, caloresAll, totalBurned } = useActivity()

    return (

        <>
            <h2 className="text-4xl font-black text-white text-center ">Resumen de calorias</h2>

            <div className="flex justify-between text-center">
                <CaloriesDisplay calories={totalCalories} text={"Calorias consumidas"} />
                <CaloriesDisplay calories={caloresAll} text={"Diferencia"} />
                <CaloriesDisplay calories={totalBurned} text={"Calorias quemadas"} />
            </div>
        </>

    )
}
