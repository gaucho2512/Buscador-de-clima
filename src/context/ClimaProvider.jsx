import { useState , createContext } from 'react'
import axios from 'axios'

const ClimaContext = createContext()


const ClimaProvider = ({children}) => {

  const [cargando , setCargando] = useState(false)
  const [ noResultado , setNoResultado ] = useState('')
  const [resultado , setresultado] = useState({

  })

  const [busqueda, setBusqueda] = useState({
          ciudad: "",
          pais: "",
  })

  const datosBusqueda = (e) => {
        setBusqueda({
          ...busqueda ,
          [e.target.name] : e.target.value
        })
  }

  const consultarClima = async (datos) => {
        setCargando(true)
        setNoResultado(false)
      try {

        const { ciudad , pais } = datos
        const appId = '3313ef7bad42b7737e753840e7e503dc'

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
        const resultado = await axios(url)

        const { data } = await axios(url)
        const { lat , lon } = data[0]

        const urlClima =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

        const { data: clima } = await axios(urlClima)
        setresultado(clima);
        


      } catch (error) {
        setNoResultado('NO HAY RESULTADOS...')
      } finally {
        setCargando(false)
      }
  }

  return (

        <ClimaContext.Provider
              value={{
                busqueda,
                setBusqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                setCargando,
                noResultado
              }}
        >
           {children}
        </ClimaContext.Provider>

  )
}

export {
  ClimaProvider
} 

export default ClimaContext