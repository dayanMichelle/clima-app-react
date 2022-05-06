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
  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};
export { ClimaProvider };
export default ClimaContext;
