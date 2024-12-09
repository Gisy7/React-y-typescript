import axios from "axios"
import { cryptoCurrencyReponseSchema, dataSchema } from "../schema/crypto-schema"
import { Form } from "../types"





export const getCryptos = async () => {

    const currency = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"


    const { data: { Data } } = await axios(currency)
    console.log(Data)
    const result = cryptoCurrencyReponseSchema.safeParse(Data)

    if (result.success) {
        return result.data
    } else {
        console.error("Se ha producido oun error en la respuesta")
    }
}


export const getData = async (form: Form) => {

    const fetchData = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${form.bitcoin}&tsyms=${form.currency}`

    const { data: { DISPLAY } } = await axios(fetchData)

    const result = dataSchema.safeParse(DISPLAY[form.bitcoin][form.currency])
    console.log(result)
    if (result.success) {
        return result.data
    } else {
        console.error("Se ha producido oun error en la respuesta")
    }
}
