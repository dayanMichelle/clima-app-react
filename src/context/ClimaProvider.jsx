import { useContext, useState } from "react";

const ClimaContext = useContext();
const [busqueda, setBusqueda] = useState({
  ciudad: "",
  pais: "",
  resultado: "",
});
const datosBusqueda = (e) => {
  setBusqueda({ ...dev, [e.target.name]: e.target.name });
};

const ClimaProvider = ({ children }) => {
  return (
    <ClimaContext
      value={{
        datosBusqueda,
        busqueda,
      }}
    >
      {children}
    </ClimaContext>
  );
};
export { ClimaProvider };
export default ClimaContext;
