import { CurrencySchema, cryptoCurrencyReponseSchema, dataSchema, formSchema } from "../schema/crypto-schema"
import z from "zod"

export type Currency = z.infer<typeof CurrencySchema>

export type Bitcoin = z.infer<typeof cryptoCurrencyReponseSchema>


export type Form = z.infer<typeof formSchema>

export type FetchData = z.infer<typeof dataSchema>
