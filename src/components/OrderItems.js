

import Button from "./Button";
import './OrderItems.css'


const OrderItems = (props) => {
  const deleteOrder = (orderId) => {
    props.onDelete(orderId);
  };


  const filteredOrders = props.orders.filter(
  (order) =>order.orderSummary && order.orderSummary.table === props.tableId
  );
  return (
    <div className="order-items">
      {filteredOrders.length > 0 && (
        <ul className="order-ul">
          {filteredOrders.map((order) => (
            <li key={order.orderSummary.id }>
              <span>{order.orderSummary.name }</span>
              <span>{order.orderSummary.price}</span>
              <span>{order.orderSummary.table}</span>
              <span>
                <Button
                  type="button"
                  onClick={() =>
                    deleteOrder(order.orderSummary.id)
                  }
                >
                  Delete
                </Button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderItems;
