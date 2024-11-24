import { categories } from "../data/categories";
import { useBudget } from "../hooks/useContext";
import { Expense } from "../types"
import { formatCurrency, formatDate } from '../utils/index';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';



type ExpensiveDetailsProps = {
    expense: Expense
}


function ExpensiveDetails({ expense }: ExpensiveDetailsProps) {

    const { dispatch } = useBudget()

    const categoryDetails = (categoryId: Expense["category"]) => {
        const findCategoryDetail = categories.find(category => category.id === categoryId)
        return findCategoryDetail
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => {
                dispatch({ type: "show-modal" })
                dispatch({ type: "get-id-expense", payload: { expensiveId: expense.id } })
            }}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => dispatch({ type: "remove-expense", payload: { id: expense.id } })}
            >
                Elminar
            </SwipeAction>
        </TrailingActions>
    );





    return (

        <SwipeableList>

            <SwipeableListItem
                maxSwipe={30}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="flex justify-between items-center  p-10 w-full">
                    <div className="flex center-items gap-6">
                        <img className='w-24' src={`icono_${categoryDetails(expense.category)?.icon}.svg`} alt="" />
                        <div className="flex flex-col justify-center items">
                            <p className="uppercase font-bold text-gray-500">{categoryDetails(expense.category)?.name}</p>
                            <p>{expense.expensiveName}</p>
                            <small className="text-gray-500 text-sm font-semibold">{formatDate(expense.date!.toString())}</small>
                        </div>
                    </div>
                    <p className="text-xl font-bold">{formatCurrency(expense.amount)}</p>
                </div>
            </SwipeableListItem>

        </SwipeableList>


    )
}

export default ExpensiveDetails