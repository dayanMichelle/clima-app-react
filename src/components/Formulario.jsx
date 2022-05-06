import React from "react";

const Formulario = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            name="ciudad"
            id="ciudad"
            type="text"
            placeholder="Ej: Madrid"
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select id="pais" name="pais">
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
        <input  type="submit" value="Consultar clima"/>
      </form>
    </div>
  );
};

export default Formulario;
