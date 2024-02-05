import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import "./OrderForm.css";

const OrdersForm = (props) => {
  const [orderId, setOrderId] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [orderName, setOrderName] = useState("");
  const [selectedTable, setSelectedTable] = useState("");

  const handleOrderId = (event) => {
    setOrderId(event.target.value);
  };

  const handleOrderName = (event) => {
    setOrderName(event.target.value);
  };

  const handleOrderPrice = (event) => {
    setOrderPrice(event.target.value);
  };

  const handleSelectedTable = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    let orderSummary = {
      id: orderId,
      name: orderName,
      price: orderPrice,
      table: selectedTable,
    };
    props.onOrder(orderSummary);
    let summary = {
      name: orderSummary.name,
      price: orderSummary.price,
      table: orderSummary.table,
    };
    localStorage.setItem(orderSummary.id, JSON.stringify(summary));

    setOrderId("");
    setOrderName("");
    setOrderPrice("");
    setSelectedTable("");
  };

  return (
    <form className="form-style" onSubmit={handleOrderSubmit}>
      <Input
        type="number"
        placeholder="Choose Order Id"
        id="orderId"
        label="Unique-Order-Id:"
        onChange={handleOrderId}
        value={orderId}
      />
      <Input
        type="text"
        placeholder="Enter Dish"
        id="dish"
        label="Choose-Dish:"
        onChange={handleOrderName}
        value={orderName}
      />
      <Input
        type="text"
        placeholder="Enter Price"
        id="price"
        label="Choose-Price:"
        onChange={handleOrderPrice}
        value={orderPrice}
      />

      <div className="dropDown">
        <label>Select-Table:</label>
        <select onChange={handleSelectedTable} value={selectedTable}>
          <option value="">Select</option>
          <option value="table-1">Tabel-1</option>
          <option value="table-2">Tabel-2</option>
          <option value="table-3">Tabel-3</option>
        </select>
      </div>

      <Button type="submit">Add-Bill</Button>
    </form>
  );
};

export default OrdersForm;
