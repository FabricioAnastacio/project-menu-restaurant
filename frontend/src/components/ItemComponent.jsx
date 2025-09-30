import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class ItemComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      counterFood: 0,
      counterDrink: 0,
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

  addSoftDrink = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listSoftDrink } = this.context;

    this.context.listSoftDrink = listSoftDrink.map((ite) => {
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

  removeSoftDrink = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { listSoftDrink } = this.context;

    this.context.listSoftDrink = listSoftDrink.map((ite) => {
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

  addNewItem = (item, isFood) => {
    if (isFood) this.addFood(item);
    else this.addSoftDrink(item);
  };

  removeItem = (item, isFood) => {
    if (isFood) this.removeFood(item);
    else this.removeSoftDrink(item);
  };

  getCounter = (counterDrink, counterFood, isFood, id) => {
    const { listSoftDrink, listMenuFood } = this.context;

    if (counterDrink > 0 && counterFood > 0) return isFood ? counterFood : counterDrink;

    return isFood ? listMenuFood[id - 1].amount : listSoftDrink[id - 1].amount;
  };

  render() {
    const { counterDrink, counterFood } = this.state;
    const { item, isFood, getItem, setBlur } = this.props;

    return (
      <li>
        <section className="Description_Item">
          <h3>{ item.name }</h3>
          <p>{ item.description }</p>
          <div className="Value_Sale">
            <h4>{ `R$${item.value.toFixed(2)}` }</h4>
            <div className="buttons-sale">
              <button className="buy" onClick={ () => this.addNewItem(item, isFood) }>
                +
              </button>
              <p className={ item.amount > 0 ? 'item-buy' : '' }>
                {
                  this.getCounter(counterDrink, counterFood, isFood, item.id)
                }
              </p>
              <button className="sell" onClick={ () => this.removeItem(item, isFood) }>
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
  getItem: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default ItemComponent;
