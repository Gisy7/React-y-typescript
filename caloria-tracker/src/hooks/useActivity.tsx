import { useContext } from 'react'
import { ActivityProvider } from '../context/ContextActivity'

function useActivity() {

    const context = useContext(ActivityProvider)

    if (!context) throw new Error("El context de actividades no esta disponible")



    return context

}

export default useActivity