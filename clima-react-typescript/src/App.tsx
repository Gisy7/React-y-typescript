import styles from './App.module.css'
import Form from './components/Form/Form';
import useWeather from './hooks/useWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import Spiner from './components/Spinner/Spiner';

function App() {

  const { fetchWeather, weatherApi, loading, isWeatherValid } = useWeather()
  console.log(loading)

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        { isWeatherValid && <WeatherDetails weatherApi={weatherApi}/>}

        { loading && <Spiner/> }

    

      </div>
    </>
  )
}

export default App
