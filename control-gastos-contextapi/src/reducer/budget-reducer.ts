import { category, Expense, formExpense } from "../types"


export type budgetActions =
    { type: "add-budget", payload: { budget: number } } |
    { type: "show-modal" } |
    { type: "add-expense", payload: { expense: formExpense } } |
    { type: "remove-expense", payload: { id: Expense["id"] } } |
    { type: "edit-expense", payload: { expense: formExpense } } |
    { type: "get-id-expense", payload: { expensiveId: Expense["id"] } } |
    { type: "reset-app" } |
    { type: "add-filter-category", payload: { filter: category["id"] } }


export type budgetState = {
    budget: number,
    modal: boolean
    expenses: Expense[]
    expensiveId: Expense["id"]
    filter: Expense["category"]
}

const getLocalStorageBudget = () => {
    const budget = localStorage.getItem("budget")

    return budget ? Number(budget) : 0
}

const getLocalStorageExpense = () => {
    const expense = localStorage.getItem("expense")
    return expense ? JSON.parse(expense) : []
}


export const initialState: budgetState = {
    budget: getLocalStorageBudget(),
    expenses: getLocalStorageExpense(),
    modal: false,
    expensiveId: '',
    filter: ""
}



export const budgetReducer = (state: budgetState = initialState, action: budgetActions): budgetState => {


    if (action.type === "add-budget") {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type === "show-modal") {
        return {
            ...state,
            modal: !state.modal
        }
    }


    if (action.type === "add-expense") {
        const addIdExpense = { ...action.payload.expense, id: crypto.randomUUID() }
        return {
            ...state,
            modal: false,
            expenses: [...state.expenses, addIdExpense]
        }
    }


    if (action.type === "remove-expense") {
        const deleteState = state.expenses.filter((expense) => expense.id !== action.payload.id)

        return {
            ...state,
            expenses: deleteState
        }
    }


    if (action.type === "edit-expense") {


        const { expensiveName, amount, category, date } = action.payload.expense

        const editExpese = state.expenses.map((expense) => {
            if (expense.id === state.expensiveId) {
                return {
                    ...expense,
                    expensiveName,
                    amount,
                    category,
                    date
                }
            }
            return expense
        })

        return {
            ...state,
            expensiveId: "",
            modal: false,
            expenses: editExpese
        }
    }

    if (action.type == "get-id-expense") {
        return {
            ...state,
            expensiveId: action.payload.expensiveId
        }
    }


    if (action.type === "reset-app") {
        return {
            ...state,
            budget: 0,
            expenses: []
        }
    }


    if (action.type === "add-filter-category") {
        return {
            ...state,
            filter: action.payload.filter
        }
    }


    return state
}