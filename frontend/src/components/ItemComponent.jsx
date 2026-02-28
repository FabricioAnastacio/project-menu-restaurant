/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class ItemComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      counterFood: 0,
      counterDrink: 0,
      counterCandy: 0,
    };
  }

  addFood = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu } = this.context;

    listMenu.food = listMenu.food.map((ite) => {
      if (ite.id === item.id) {
        if (ite.amount === 0) counterRequestAmount(counterItens + 1);
        ite.amount += 1;
        this.setState({
          counterFood: ite.amount,
        });
      }
      return ite;
    });
  };

  addDrink = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu: { allDrinks }, listMenu } = this.context;

    listMenu.allDrinks = allDrinks.map((ite) => {
      if (ite.id === item.id) {
        if (ite.amount === 0) counterRequestAmount(counterItens + 1);
        ite.amount += 1;
        this.setState({
          counterDrink: ite.amount,
        });
      }
      return ite;
    });
  };

  addCandy = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu: { candy }, listMenu } = this.context;

    listMenu.candy = candy.map((ite) => {
      if (ite.id === item.id) {
        if (ite.amount === 0) counterRequestAmount(counterItens + 1);
        ite.amount += 1;
        this.setState({
          counterCandy: ite.amount,
        });
      }
      return ite;
    });
  };

  removeFood = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu } = this.context;

    listMenu.food = listMenu.food.map((ite) => {
      if (ite.id === item.id && ite.amount > 0) {
        ite.amount -= 1;
        this.setState({
          counterFood: ite.amount,
        });
        if (ite.amount === 0) counterRequestAmount(counterItens - 1);
      }
      return ite;
    });
  };

  removeDrink = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu: { allDrinks }, listMenu } = this.context;

    listMenu.allDrinks = allDrinks.map((ite) => {
      if (ite.id === item.id && ite.amount > 0) {
        ite.amount -= 1;
        this.setState({
          counterDrink: ite.amount,
        });
        if (ite.amount === 0) counterRequestAmount(counterItens - 1);
      }
      return ite;
    });
  };

  removeCandy = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu: { candy }, listMenu } = this.context;

    listMenu.candy = candy.map((ite) => {
      if (ite.id === item.id && ite.amount > 0) {
        ite.amount -= 1;
        this.setState({
          counterCandy: ite.amount,
        });
        if (ite.amount === 0) counterRequestAmount(counterItens - 1);
      }
      return ite;
    });
  };

  addNewItem = (item, isFood, isCandy) => {
    if (isFood) this.addFood(item);
    else if (isCandy) this.addCandy(item);
    else this.addDrink(item);
  };

  removeItem = (item, isFood, isCandy) => {
    if (isFood) this.removeFood(item);
    else if (isCandy) this.removeCandy(item);
    else this.removeDrink(item);
  };

  getCounter = (isFood, isCandy, id) => {
    const { counterDrink, counterFood, counterCandy } = this.state;
    const {
      listMenu: { food, allDrinks, candy } } = this.context;

    const isValuer = counterDrink > 0 && counterFood > 0 && counterCandy > 0;

    if (isValuer) {
      if (isFood) return counterFood;

      if (isCandy) return counterCandy;

      return counterDrink;
    }

    if (isFood) return food[id - 1].amount;

    if (isCandy) return candy[id - 1].amount;

    return allDrinks[id - 1].amount;
  };

  render() {
    const { item, isFood, isCandy, getItem, setBlur } = this.props;

    return (
      <li>
        <section className="Description_Item">
          <h3>{ `${item.id} - ${item.name}` }</h3>
          <p>{ item.description }</p>
          <div className="Value_Sale">
            <h4>{ `R$${item.value.toFixed(2)}` }</h4>
            <div className="buttons-sale">
              <button
                className="buy"
                onClick={ () => this.addNewItem(item, isFood, isCandy) }
              >
                +
              </button>
              <p className={ item.amount > 0 ? 'item-buy' : 'item' }>
                {
                  this.getCounter(isFood, isCandy, item.id)
                }
              </p>
              <button
                className="sell"
                onClick={ () => this.removeItem(item, isFood, isCandy) }
              >
                -
              </button>
            </div>
          </div>
        </section>
        <div className="AriaButton" onClick={ () => { getItem(item); setBlur(); } } aria-hidden="true">
          <div
            className="imgs-menu"
            style={ { backgroundImage: `url(${item.img})` } }
            aria-hidden="true"
          />
          <p>Detalhes...</p>
        </div>
      </li>
    );
  }
}

ItemComponent.contextType = AppContext;

ItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  counterItens: PropTypes.number.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  isFood: PropTypes.bool.isRequired,
  isCandy: PropTypes.bool.isRequired,
  getItem: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default ItemComponent;
