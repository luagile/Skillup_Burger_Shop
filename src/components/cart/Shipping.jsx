import React from "react";

import { Country, State } from "country-state-city";

import { Link } from "react-router-dom";

import Popup from "reactjs-popup";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Detalles de Envío</h1>
        <form>
          <div>
            <label>Dirección</label>
            <input type="text" placeholder="Añadir dirección de entrega" />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Introduzca ciudad" />
          </div>
          <div>
            {/* COUNTRY DROPDOWN*/}
            <label>País</label>
            <select>
              <option value="">Seleccione un País</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Provincia</label>
            <select>
              <option value="">Seleccione una Provincia</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Código Postal</label>
            <input type="number" placeholder="Introduzca código postal" />
          </div>
          <div>
            <label>Móvil</label>
            <input type="number" placeholder="Introduzca número de móvil" />
          </div>
          <Popup
            trigger={
              <Link className="link" to="/myorders">
                Confirmar Pedido
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%,-500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Su pedido se ha tramitado correctamente!
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;