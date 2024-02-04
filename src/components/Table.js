import React from "react";
import OrderItems from "./OrderItems";
import "./Table.css";

const Table = (props) => {
  return (
    <div className="table">
      <div>
        <h1>Table 1</h1>
        <OrderItems
          orders={props.orders}
          onDelete={props.onDelete}
          tableId="table-1"
        />
      </div>

      <div>
        <h1>Table 2</h1>
        <OrderItems
          orders={props.orders}
          onDelete={props.onDelete}
          tableId="table-2"
        />
      </div>

      <div>
        <h1>Table 3</h1>
        <OrderItems
          orders={props.orders}
          onDelete={props.onDelete}
          tableId="table-3"
        />
      </div>
    </div>
  );
};

export default Table;
