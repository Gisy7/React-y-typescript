export type menuItem = {
    id: number,
    name: string,
    price: number
}


export type menuOrder = menuItem & {
    quantity: number
}



