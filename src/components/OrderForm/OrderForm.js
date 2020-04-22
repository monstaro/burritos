import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrder } from "../../actions";
import { postOrder } from "../../apiCalls";
class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: "",
      ingredients: [],
      id: null,
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleIngredientChange = (e) => {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, e.target.name],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    postOrder(this.state)
    .then(res => res.json())
    .then(data => this.props.addOrder(data))
    .catch(err => console.err(err.message))
    this.clearInputs();
  };
  clearInputs = () => {
    this.setState({ name: "", ingredients: [] });
  };
  render() {
    const possibleIngredients = [
      "beans",
      "steak",
      "carnitas",
      "sofritas",
      "lettuce",
      "queso fresco",
      "pico de gallo",
      "hot sauce",
      "guacamole",
      "jalapenos",
      "cilantro",
      "sour cream",
    ];
    const ingredientButtons = possibleIngredients.map((ingredient) => {
      return (
        <button
          data-testid={ingredient}
          key={ingredient}
          name={ingredient}
          onClick={(e) => this.handleIngredientChange(e)}
        >
          {ingredient}
        </button>
      );
    });

    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(", ") || "Nothing selected"}</p>

        <button
          disabled={!this.state.ingredients.length}
          onClick={(e) => this.handleSubmit(e)}
          data-testid="submit-btn"
        >
          Submit Order
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addOrder: (order) => dispatch(addOrder(order)),
});

export default connect(null, mapDispatchToProps)(OrderForm);
