import { categories } from '../data/categories'
import { useBudget } from '../hooks/useContext'

function ExpensiveFilter() {

    const { dispatch } = useBudget()

    return (
        <div className='bg-white rounded-lg p-10'>
            <form className="flex justify-center items-center gap-5" action="">

                <label>Filtrar Gastos: </label>

                <select
                    className="flex-1 p-2 bg-slate-100 rounded-md" name="" id=""
                    onChange={(e) => dispatch({ type: "add-filter-category", payload: { filter: e.currentTarget.value } })}
                >
                    <option value="">Mostrar Todos</option>
                    {categories.map((category) => {
                        return <option
                            value={category.id}
                            key={category.id}>{category.name}</option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default ExpensiveFilter