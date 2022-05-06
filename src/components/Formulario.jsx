import { useContext, useState } from "react";
import ClimaContext from "../context/ClimaProvider";

const Formulario = () => {
  const { busqueda, datosBusqueda,consultarClima } = useContext(ClimaContext);
  const { ciudad, pais } = busqueda;
  const  [ alerta , setAlerta ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')){
      setAlerta('Por favor, rellena todos los campos');
      return
    }
    setAlerta('');
    consultarClima(busqueda);
  }


  return (
    <div className="contenedor">
      {alerta && <p className="alerta">{alerta}</p>}
      <form onSubmit={handleSubmit}> 
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            name="ciudad"
            id="ciudad"
            type="text"
            placeholder="Ej: Madrid"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select id="pais" name="pais" onChange={datosBusqueda} value={pais}>
            <option value="">Elige un país</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
            <option value="US">Estados unidos</option>
            <option value="NZ">Nueva Zelanda</option>
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
};

export default Formulario;
