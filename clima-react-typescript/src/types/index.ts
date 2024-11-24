export type searchForm = {
    city: string,
    country: string
}


export type weather = {
    location: {
        country: string,
        name: string
    },
    current: {
        temp_ce: number,
        humidity: number
        condition: {
            text: string
        }
    }
}