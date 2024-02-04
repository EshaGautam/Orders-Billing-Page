import "./App.css";
import OrdersForm from "./components/OrdersForm";
import Header from "./Header";
import Table from "./components/Table";
import { useEffect, useState } from "react";

function App() {
  const [orderTaken, setOrderTaken] = useState([]);

  const ordersubmitted = (orderSummary) => {
    setOrderTaken((prevOrderTaken) => [...prevOrderTaken, { orderSummary }]);
  };

  useEffect(() => {
    let existingOrder = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        let data = { id: key.toString(), ...value };
        existingOrder.push({orderSummary:data});
      }
    }
    setOrderTaken(existingOrder);
  }, []);

  const deleteOrder = (orderId) => {
    const updatedOrders = orderTaken.filter(
      (order) => order.orderSummary.id !== orderId
    );
    setOrderTaken(updatedOrders);
    localStorage.removeItem(orderId);
  };

  return (
    <div>
      <Header />
      <OrdersForm onOrder={ordersubmitted} />
      <Table orders={orderTaken} onDelete={deleteOrder} />
    </div>
  );
}

export default App;
