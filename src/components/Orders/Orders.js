import React, { Component } from "react";
import "./Orders.css";
import { connect } from "react-redux";
import { getOrders, deleteOrder } from "../../apiCalls";
import { setOrders, removeOrder } from "../../actions";

class Orders extends Component {
  componentDidMount = () => {
    getOrders()
      .then((data) => this.props.setOrders(data.orders))
      .catch((err) => console.error("Error fetching:", err));
  };
  deleteHandler(order) {
    this.props.removeOrder(order)
    deleteOrder(order.id)
  }
  render() {
    console.log(this.props)
    if (this.props.orders.length) {
      const orderEls = this.props.orders.map(order => {
        return (
          <div className="order" key={order.id}>
            <h3>{order.name}</h3>
            <button onClick={() => this.deleteHandler(order)}>Delete</button>
            <ul className="ingredient-list">
              {order.ingredients.map(ingredient => {
                return <li key={order.id + ingredient}>{ingredient}</li>
              })}
            </ul>
          </div>
        )
      });
        return (
          <section>
            { orderEls.length ? orderEls : <p>No orders yet!</p> }
          </section>
        );
      } else {
        return "Tis loadin...'"
      }
    }
    }
 

const mapStateToProps = ({ orders }) => ({
  orders: orders,
});

const mapDispatchToProps = dispatch => (
  {
    setOrders: (orders) => dispatch(setOrders(orders)),
    removeOrder: (order) => dispatch(removeOrder(order))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
