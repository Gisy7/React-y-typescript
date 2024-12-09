import z from "zod"

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})


export const cryptoCurrencyReponseSchema = z.array(
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string(),
            ImageUrl: z.string()
        })
    })
)


export const formSchema = z.object({
    currency: z.string(),
    bitcoin: z.string()
})


export const dataSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})