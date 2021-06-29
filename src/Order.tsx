import React from "react";

function Order(props:any) {
  return (
    <div>
      <p>
        <strong>Comida: </strong>
        {props.food}
      </p>
      <p>
        <strong>Sabor: </strong>
        {props.flavor}
      </p>
    </div>
  );
}

export default Order;
