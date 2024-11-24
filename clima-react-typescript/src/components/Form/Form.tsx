import { countries } from '../../data/countries'
import styles from "./Form.module.css"


export default function Form() {
    return (
        <form className={styles.form}>
            <div>
                <label htmlFor="city">Ciudad</label>
                <input
                    id="city"
                    type="text"
                    name='city'
                    placeholder='Ciudad'
                />
            </div>

            <div>
                <label htmlFor="country">País</label>
                <select name="country">
                    <option
                        value=""
                        disabled
                    >Selecciona un país</option>
                    {countries.map((country) => {
                        return <option
                            value={country.code}>
                            {country.name}
                        </option>
                    })}
                </select>
            </div>

            <button>Consultar Clima</button>
        </form>
    )
}
