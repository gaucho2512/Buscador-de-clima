import {useState} from 'react'
import useClima from '../hooks/useClima'

const Formulario = () => {

  const [ alerta , setAlerta] = useState("")
  const { busqueda , datosBusqueda , consultarClima } = useClima()
  const { cuidad , pais } = busqueda

  const handleSubmit = (e) => {
      e.preventDefault()
      if (Object.values(busqueda).includes('')) {
         setAlerta('todos los campos son obligatorios')
         return
      }

      setAlerta('')
      consultarClima(busqueda)
  }

  return (
    <>
        <div className="contenedor">
          { alerta  && <p>{alerta}</p> }
            <form
              onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="cuidad">Ciudad</label>
                    <input 
                    type="text" 
                    id='ciudad'
                    name='ciudad'
                    onChange={datosBusqueda}
                    value={cuidad}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select 
                    name="pais" 
                    id="pais"
                    onChange={datosBusqueda}
                    value={pais}
                    >

                    <option value="">Seleccione un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>

                    </select>
                </div>

                <input 
                  type="submit" 
                  value='Consultar Clima'
                />
            </form>
        </div>
    </>
  )
}

export default Formulario