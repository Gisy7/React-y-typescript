import { Weather } from '../../hooks/useWeather'
import styles from "./WeatherDetails.module.css"


type WeatherDetailsProps = {
  weatherApi: Weather
}


function WeatherDetails({ weatherApi }: WeatherDetailsProps) {
  return (
    <div className={styles.weatherDetails}>
      <h2>{weatherApi.location.name}, {weatherApi.location.country}</h2>
      <p className={styles.condition}>{weatherApi.current.condition.text}</p>
      <div>
        <div className={styles.tempC}>
          <p>Temperatura</p>
          <p>{weatherApi.current.temp_c} Cº</p>
        </div>
        <div className={styles.humidity}>
          <p>Humedad</p>
          <p>{weatherApi.current.humidity} %</p>
        </div>


      </div>
    </div>
  )
}

export default WeatherDetails