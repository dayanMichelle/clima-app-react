import { createContext, useState } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, useBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const datosBusqueda = e => {
    useBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
  })
}

const consultarClima = datos => {
    console.log(datos);
}
  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};
export { ClimaProvider };
export default ClimaContext;
