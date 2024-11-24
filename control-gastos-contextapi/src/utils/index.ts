export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
}


export const formatDate = (date: string) => {

    const newDate = new Date(date)

    return new Intl.DateTimeFormat('es-ES', {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }).format(newDate)
}