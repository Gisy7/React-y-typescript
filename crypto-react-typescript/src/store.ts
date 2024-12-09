import { create } from "zustand"
import { Bitcoin, FetchData, Form } from "./types"
import { devtools } from "zustand/middleware"
import { getCryptos, getData } from "./services/services"


type CryptoStore = {
    bitcoin: Bitcoin
    cryptoData: FetchData
    loading: boolean,
    fetchCrypto: () => Promise<void>
    fetchData: (form: Form) => Promise<void>
}

export const UseCryptoStore = create<CryptoStore>()(devtools((set) => ({
    bitcoin: [],
    cryptoData: {
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: ""
    },
    loading: false,

    fetchCrypto: async () => {
        const bitcoins = await getCryptos()
        set({
            bitcoin: bitcoins
        })
    },

    fetchData: async (form) => {
       
        set({
            loading: true
        })

        const cryptoData = await getData(form)
        
        set({
            cryptoData: cryptoData,
            loading: false
        })

    },



})))