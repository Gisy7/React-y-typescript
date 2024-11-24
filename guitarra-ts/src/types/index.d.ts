export type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number
}


type ItemElements = Pick<Guitar, "id" | "name" | "price" | "image">

export type CartItem = ItemElements & {
    quantity: number
}


