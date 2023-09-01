// Write all the code here
import React from "react";
const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Detalles del pedido</h1>
        <div>
          <h1>Envío</h1>
          <p>
            <b>Dirección</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>
        <div>
          <h1>Contacto</h1>
          <p>
            <b>Nombre</b>
            {"Stuart"}
          </p>
          <p>
            <b>Teléfono</b>
            {2131232123}
          </p>
        </div>
        <div>
          <h1>Estado</h1>
          <p>
            <b>Estado del pedido</b>
            {"Processing"}
          </p>
          <p>
            <b>Fecha del pedido</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Fecha del envío</b>
            {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>INFORMACIÓN SOBRE EL PAGO</h1>
          <p>
            <b>Método de pago</b>
            {"COD"}
          </p>
          <p>
            <b>Referencia del pago</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Fecha de pago</b>
            {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>Cantidad</h1>
          <p>
            <b>Total de productos</b>₹{2132}
          </p>
          <p>
            <b>Portes de envío</b>₹{200}
          </p>
          <p>
            <b>IVA</b>₹{232}
          </p>
          <p>
            <b>Cantidad Total</b>₹{232 + 200 + 2132}
          </p>
        </div>
        <article>
          <h1>Productos Comprados</h1>
          <div>
            <h4>Hamburguesa de queso</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Hamburguesa vegetariana</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Hamburguesa con patatas</h4>
            <div>
              <span>{10}</span> x <span>{1850}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};
export default OrderDetails;