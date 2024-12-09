import React from 'react'
import { UseCryptoStore } from '../../store'
import "./CryptoDataList.css"
import Spinner from '../Spinner/Spinner'

function CryptoDataList() {

  const fetchData = UseCryptoStore(state => state.cryptoData)
  const loading = UseCryptoStore(state => state.loading)


  const hasData = !Object.values(fetchData).includes("")

  console.log(hasData)

  return (

    loading ? <Spinner/> : hasData && <> 
    <h3>Cotización</h3>
    <div className='card'>
    <img src={`https://www.cryptocompare.com/${fetchData.IMAGEURL}`} alt="" />
     <div className='infoCard'>
        <p>El precio es de: <strong>{fetchData.PRICE}</strong></p>
        <p>El precio más alto del día: <strong>{fetchData.HIGHDAY}</strong></p>
        <p>El precio más bajo del dia: <strong>{fetchData.LOWDAY}</strong></p>
        <p>Variación últimas 24 horas: <strong>{fetchData.LASTUPDATE}</strong></p>
        <p>Última actualización: <strong>{fetchData.CHANGEPCT24HOUR}</strong></p>
     </div>
    </div>
    </>

    
  )
}

export default CryptoDataList