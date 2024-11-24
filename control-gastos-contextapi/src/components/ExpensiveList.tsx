import { useBudget } from "../hooks/useContext"
import ExpensiveDetails from "./ExpensiveDetails"

function ExpensiveList() {

    const { state } = useBudget()

    const filterCategory = state.filter === "" ? state.expenses : state.expenses.filter((expense) => expense.category === state.filter)

    return (
        <>
            {filterCategory.length !== 0 ? <div className="space-y-5">
                {filterCategory.map((expense) => {
                    return <ExpensiveDetails
                        key={expense.id}
                        expense={expense} />
                })}
            </div> : <p className=" p-10 ">No hay gastos</p>}

        </>
    )
}

export default ExpensiveList