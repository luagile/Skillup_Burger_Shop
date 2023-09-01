import React from "react";

import { Link } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Nº de Orden</th>
              <th>Estado</th>
              <th>Unidades</th>
              <th>Importe</th>
              <th>Método de pago</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#10534</td>
                <td>Procesando</td>
                <td>23</td>
                <td>₹{2132}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;