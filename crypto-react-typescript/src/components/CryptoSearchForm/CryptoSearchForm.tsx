import React, { ChangeEvent, FormEvent, useState } from 'react'
import "./CryptoSearchForm.css"
import { currencies } from '../../data/currency'
import { UseCryptoStore } from '../../store'
import { Form } from '../../types'
import ErrorMessage from '../ErrorMessage/ErrorMessage'


function CryptoSearchForm() {

    const bitcoins = UseCryptoStore(state => state.bitcoin)
    const fetchData = UseCryptoStore(state => state.fetchData)
    const loading = UseCryptoStore(state => state.loading)

   

    const [form, setForm] = useState<Form>({
        currency: "",
        bitcoin: ""
    });

    const [error, setError] = useState("");


    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => { 
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e : FormEvent) => {
        
        e.preventDefault()
        if(Object.values(form).includes("")) {
            setError("Los campos no pueden estar vacios")
        } else {
            fetchData(form)
            console.log(loading)
            setError("")
        }
     }

    return (

        <form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div>
                <label htmlFor="">Moneda:</label>
                <select name="currency" id="currency" onChange={handleChange} value={form.currency}>  
                    <option value="">-- Seleccione --</option>

                    {currencies.map((currency) => {
                        return <option 
                            value={currency.code}
                            key={currency.code}>{currency.name}
                           
                        </option>
                    })}
                </select>
            </div>


            <div>
                <label htmlFor="">Criptomoneda:</label>
                <select name="bitcoin" id="bitcoin" onChange={handleChange}  value={form.bitcoin}>
                    <option value="">-- Seleccione --</option>
                    {bitcoins.map((bitcoin) => {
                        return <option 
                            key={bitcoin.CoinInfo.FullName}
                            value={ bitcoin.CoinInfo.Name }>
                                {bitcoin.CoinInfo.FullName}
                            </option>
                    })}
                </select> 
            </div>

            <input className="submit" type="submit" value="Cotizar"/>

        </form>
    )
}

export default CryptoSearchForm