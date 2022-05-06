import { createContext, useState } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, useBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, setResultado] = useState({});
  const datosBusqueda = (e) => {
    useBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async (datos) => {
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      const { data } = await axios.get(url);
      const { lat, lon } = data[0];
      const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: clima } = await axios.get(urlClima);
      setResultado(clima);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};
export { ClimaProvider };
export default ClimaContext;
