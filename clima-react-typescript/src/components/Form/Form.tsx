import { ChangeEvent, FormEvent, useState } from 'react';
import { countries } from '../../data/countries'
import { searchForm } from "../../types/index"
import styles from "./Form.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import Error from "../Alert/Error"


type formProps = {
    fetchWeather: (search : searchForm) => Promise<void>
}


export default function Form({fetchWeather} : formProps) {

    const { register, handleSubmit, formState: { errors },} = useForm<searchForm>()

    const onSubmit = (data: searchForm) => {
        fetchWeather(data)
    }
    

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="city">Ciudad</label>
                <input
                    id="city"
                    type="text"
                    placeholder='Ciudad'
                    {...register("city", 
                        { 
                            required: "La ciudad es requerida", 
                            maxLength: 20 
                        })}
                />
                {errors.city && <Error>{errors.city.message}</Error>}
            </div>

            <div>
                <label htmlFor="country">País</label>
                <select
                    id="country"
                    {...register("country",   { 
                        required: true, 
                    })}
                >
                    <option
                        value=""
                        disabled
                    >Selecciona un país</option>
                    {countries.map((country) => {
                        return <option
                            key={country.code}
                            value={country.name}>
                            {country.name}
                        </option>
                    })}
                </select>
            </div>

            <button type='submit'>Consultar Clima</button>
        </form>
    )
}
