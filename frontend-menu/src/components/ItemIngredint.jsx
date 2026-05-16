import React from 'react';
import PropTypes from 'prop-types';
import '../style/additional.css';

class ItemIngredint extends React.Component {
  componentDidMount() {
    const { ingredient } = this.props;

    ingredient.amount = 0;
  }

  addNewIngredient = (ingredient) => {
    const { chengeValueItem, ingredient: { value } } = this.props;

    if (ingredient.amount >= ingredient.maxAmount) return;
    ingredient.amount += 1;
    chengeValueItem(value);
  };

  rmIngredient = (ingredient) => {
    const { chengeValueItem, ingredient: { value } } = this.props;

    if (ingredient.amount <= 0) return;
    ingredient.amount -= 1;
    chengeValueItem(-value);
  };

  render() {
    const { ingredient } = this.props;

    return (
      <li className="Item_additional">
        <p className="Item_name">{ ingredient.name }</p>
        <div className="Item_info">
          <div className="Item_value_and_btm">
            <button className="Btm_Rm" onClick={ () => this.rmIngredient(ingredient) }>
              -
            </button>
            <p className="Item_amount_add">{ ingredient.amount }</p>
            <button
              className="Btm_Add"
              onClick={ () => this.addNewIngredient(ingredient) }
            >
              +
            </button>
            <p className="Max_amount">
              { `Máximo: ${ingredient.maxAmount}` }
            </p>
          </div>
          <p className="Item_value">
            {
              `+ ${ingredient.value.toLocaleString('pt-BR', {
                style: 'currency', currency: 'BRL',
              })}`
            }
          </p>
        </div>
      </li>
    );
  }
}

ItemIngredint.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    maxAmount: PropTypes.number.isRequired,
  })).isRequired,
  chengeValueItem: PropTypes.func.isRequired,
};

export default ItemIngredint;
