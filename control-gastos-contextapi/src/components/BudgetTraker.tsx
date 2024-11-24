import { useBudget } from "../hooks/useContext"
import AmountDisplay from "./AmountDisplay"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

function BudgetTraker() {

    const { state, dispatch, totalAvailable, spentBudget } = useBudget()

    const porcentage = +((spentBudget / state.budget) * 100).toFixed(2)
    const color = porcentage === 100 ? `#DC2626` : '#3b82f6'

    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={porcentage}
                    text={`${porcentage}% gastado`}
                    styles={buildStyles({
                        textSize: '0.5em',
                        pathTransitionDuration: 0.5,
                        pathColor: color,
                        textColor: color,
                        trailColor: '#F5F5F5',
                        backgroundColor: '#3e98c7',
                    })} />
            </div>

            <div className="flex flex-col justify-center items-center gap-5">

                <button
                    className="bg-pink-600 p-1 rounded-lg uppercase font-semibold text-white w-full"
                    onClick={() => dispatch({ type: "reset-app" })}
                >Resetear App</button>
                <AmountDisplay
                    label={"Presupuesto"}
                    amount={state.budget}
                />

                <AmountDisplay
                    label={"Disponible"}
                    amount={totalAvailable}
                />

                <AmountDisplay
                    label={"Gastado"}
                    amount={spentBudget}
                />

            </div>
        </div>
    )
}

export default BudgetTraker