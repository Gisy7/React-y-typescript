export type Expense = {
    id: string
    expensiveName: string
    amount: number
    category: string
    date: Value
}

export type formExpense = Omit<Expense, "id">


type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type category = {
    id: string,
    name: string
    icon: string
}