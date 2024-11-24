import axios from "axios"
import { searchForm, weather } from "../types"
import { number, object, string, parse, safeParse, OutputDataset } from "valibot"
import { useState } from "react";
import { z } from 'zod'


const Weather = z.object({
    current: z.object({
        temp_c: z.number(),
        humidity: z.number(),

        condition: z.object({
            text: z.string()
        })
    }),
    location: z.object({
        country: z.string(),
        name: z.string()
    })
   
});

export type Weather = z.infer<typeof Weather>;


function useWeather() {

    const initialState = {
        location: {
            country: "",
            name: ""
        },
        current: {
            temp_c: 0,
            humidity: 0,
            condition: {
                text: ""
            }
        }
    }



    
    const [weatherApi, setWeatherApi] = useState<Weather>(initialState);
    const [loading, setLoading] = useState(false);
  

    // Valibot
    // const WeatherSchema = object({
    //     current: object({
    //         temp_c: number(),
    //         humidity: number(),

    //         condition: object({
    //             text: string()
    //         })
    //     }),
    //     location: object({
    //         country: string(),
    //         name: string()
    //     })
    // })


    



    const fetchWeather = async (search: searchForm) => {

        setWeatherApi(initialState)
        setLoading(true)
        const key = import.meta.env.VITE_API_KEY
        try {
            const { data } = await axios(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${search.city} ${search.country}&aqi=no`)
            
            // ZOD
            const result = Weather.safeParse(data)

            if(result.success) {
                setWeatherApi(result.data)
            } else {
                throw new Error("Se ha producido un error en la validacion de la API")
            }

            // const result = safeParse(WeatherSchema, data)

            // if(result.success) {
            //     setWeather(result.output)
            // }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }

    }

    const isWeatherValid = weatherApi.location.name !== ""

    return {
        weatherApi,
        fetchWeather,
        loading,
        isWeatherValid
    }
}




export default useWeather