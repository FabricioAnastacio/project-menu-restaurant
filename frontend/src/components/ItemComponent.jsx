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
      counterAlcoholFree: 0,
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
    const { listMenu: { allDrinks } } = this.context;

    allDrinks.beer = allDrinks.beer.map((ite) => {
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

  addSoftDrink = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu: { allDrinks } } = this.context;

    allDrinks.alcoholFree = allDrinks.alcoholFree.map((ite) => {
      if (ite.id === item.id) {
        if (ite.amount === 0) counterRequestAmount(counterItens + 1);
        ite.amount += 1;
        this.setState({
          counterAlcoholFree: ite.amount,
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
    const { listMenu: { allDrinks } } = this.context;

    allDrinks.beer = allDrinks.beer.map((ite) => {
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

  removeSoftDrink = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenu: { allDrinks } } = this.context;

    allDrinks.alcoholFree = allDrinks.alcoholFree.map((ite) => {
      if (ite.id === item.id && ite.amount > 0) {
        ite.amount -= 1;
        this.setState({
          counterAlcoholFree: ite.amount,
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

  addNewItem = (item, isFood, isbeer, isCandy) => {
    console.log(isbeer);
    console.log(isFood);
    console.log(isCandy);
    if (isFood) this.addFood(item);
    else if (isbeer) this.addDrink(item);
    else if (isCandy) this.addCandy(item);
    else this.addSoftDrink(item);
  };

  removeItem = (item, isFood, isbeer, isCandy) => {
    if (isFood) this.removeFood(item);
    else if (isbeer) this.removeDrink(item);
    else if (isCandy) this.removeCandy(item);
    else this.removeSoftDrink(item);
  };

  getCounter = (isbeer, isFood, isCandy, id) => {
    const { counterAlcoholFree, counterDrink, counterFood, counterCandy } = this.state;
    const {
      listMenu: { food, allDrinks: { alcoholFree, beer }, candy } } = this.context;

    const isValuer = counterDrink > 0 && counterFood > 0 && counterAlcoholFree > 0 && counterCandy > 0;

    if (isValuer) {
      if (isFood) return counterFood;

      if (isCandy) return counterCandy;

      return isbeer ? counterDrink : counterAlcoholFree;
    }

    if (isFood) return food[id - 1].amount;

    if (isCandy) return candy[id - 1].amount;

    return isbeer ? beer[id - 1].amount : alcoholFree[id - 1].amount;
  };

  render() {
    const { item, isFood, isbeer, isCandy, getItem, setBlur } = this.props;

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
                onClick={ () => this.addNewItem(item, isFood, isbeer, isCandy) }
              >
                +
              </button>
              <p className={ item.amount > 0 ? 'item-buy' : 'item' }>
                {
                  this.getCounter(isbeer, isFood, isCandy, item.id)
                }
              </p>
              <button
                className="sell"
                onClick={ () => this.removeItem(item, isFood, isbeer, isCandy) }
              >
                -
              </button>
            </div>
          </div>
        </section>
        <div
          className="imgs-menu"
          onClick={ () => { getItem(item); setBlur(); } }
          style={ { backgroundImage: `url(${item.img})` } }
          aria-hidden="true"
        />
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
  isbeer: PropTypes.bool.isRequired,
  isCandy: PropTypes.bool.isRequired,
  getItem: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default ItemComponent;
