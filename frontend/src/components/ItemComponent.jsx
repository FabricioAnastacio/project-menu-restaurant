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
    };
  }

  addFood = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenuFood } = this.context;

    this.context.listMenuFood = listMenuFood.map((ite) => {
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
    const { listDrink } = this.context;

    this.context.listDrink = listDrink.map((ite) => {
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
    const { listAlcoholFree } = this.context;

    this.context.listAlcoholFree = listAlcoholFree.map((ite) => {
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

  removeFood = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listMenuFood } = this.context;

    this.context.listMenuFood = listMenuFood.map((ite) => {
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
    const { listDrink } = this.context;

    this.context.listDrink = listDrink.map((ite) => {
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
    const { listAlcoholFree } = this.context;

    this.context.listAlcoholFree = listAlcoholFree.map((ite) => {
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

  addNewItem = (item, isFood, isAlcoholFree) => {
    if (isFood) this.addFood(item);
    else if (isAlcoholFree) this.addSoftDrink(item);
    else this.addDrink(item);
  };

  removeItem = (item, isFood, isAlcoholFree) => {
    if (isFood) this.removeFood(item);
    else if (isAlcoholFree) this.removeSoftDrink(item);
    else this.removeDrink(item);
  };

  getCounter = (isAlcoholFree, isFood, id) => {
    const { counterAlcoholFree, counterDrink, counterFood } = this.state;
    const { listDrink, listMenuFood, listAlcoholFree } = this.context;

    const isValuer = counterDrink > 0 && counterFood > 0 && counterAlcoholFree > 0;

    if (isValuer) {
      if (isFood) return counterFood;

      return isAlcoholFree ? counterAlcoholFree : counterDrink;
    }

    if (isFood) return listMenuFood[id - 1].amount;

    return isAlcoholFree ? listAlcoholFree[id - 1].amount : listDrink[id - 1].amount;
  };

  render() {
    const { item, isFood, isAlcoholFree, getItem, setBlur } = this.props;

    return (
      <li>
        <section className="Description_Item">
          <h3>{ item.name }</h3>
          <p>{ item.description }</p>
          <div className="Value_Sale">
            <h4>{ `R$${item.value.toFixed(2)}` }</h4>
            <div className="buttons-sale">
              <button
                className="buy"
                onClick={ () => this.addNewItem(item, isFood, isAlcoholFree) }
              >
                +
              </button>
              <p className={ item.amount > 0 ? 'item-buy' : 'item' }>
                {
                  this.getCounter(isAlcoholFree, isFood, item.id)
                }
              </p>
              <button
                className="sell"
                onClick={ () => this.removeItem(item, isFood, isAlcoholFree) }
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
  isAlcoholFree: PropTypes.bool.isRequired,
  getItem: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default ItemComponent;
