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

  addNewItem = (item, isFood) => {
    if (isFood) {
      const { listMenuFood } = this.context;
      this.context.listMenuFood = listMenuFood.map((ite) => {
        if (ite.id === item.id) {
          ite.amount += 1;
          this.setState({
            counterFood: ite.amount,
          });
        }
        return ite;
      });
    } else {
      const { listSoftDrink } = this.context;
      this.context.listSoftDrink = listSoftDrink.map((ite) => {
        if (ite.id === item.id) {
          ite.amount += 1;
          this.setState({
            counterDrink: ite.amount,
          });
        }
        return ite;
      });
    }
  };

  removeItem = (item, isFood) => {
    if (isFood) {
      const { listMenuFood } = this.context;
      this.context.listMenuFood = listMenuFood.map((ite) => {
        if (ite.id === item.id && ite.amount > 0) {
          ite.amount -= 1;
          this.setState({
            counterFood: ite.amount,
          });
        }
        return ite;
      });
    } else {
      const { listSoftDrink } = this.context;
      this.context.listSoftDrink = listSoftDrink.map((ite) => {
        if (ite.id === item.id && ite.amount > 0) {
          ite.amount -= 1;
          this.setState({
            counterDrink: ite.amount,
          });
        }
        return ite;
      });
    }
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
            <h4>{ item.value }</h4>
            <div className="buttons-sale">
              <button className="buy" onClick={ () => this.addNewItem(item, isFood) }>
                +
              </button>
              <p className={ item.amount > 0 ? 'item-buy' : '' }>
                {
                  isFood ? counterFood : counterDrink
                }
              </p>
              <button className="sell" onClick={ () => this.removeItem(item, isFood) }>
                -
              </button>
            </div>
          </div>
        </section>
        <div
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
    value: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  isFood: PropTypes.bool.isRequired,
  getItem: PropTypes.func.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default ItemComponent;
