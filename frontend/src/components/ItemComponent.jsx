import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class ItemComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  addNewItem = (item, isFood) => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });

    if (isFood) {
      const { listMenuFood } = this.context;
      this.context.listMenuFood = listMenuFood.map((ite) => {
        if (ite.id === item.id) {
          ite.amount += 1;
        }
        return ite;
      });
    } else {
      const { listSoftDrink } = this.context;
      this.context.listSoftDrink = listSoftDrink.map((ite) => {
        if (ite.id === item.id) {
          ite.amount += 1;
        }
        return ite;
      });
    }
  };

  removeItem = (item, isFood) => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({
        counter: counter - 1,
      });
      if (isFood) {
        const { listMenuFood } = this.context;
        this.context.listMenuFood = listMenuFood.map((ite) => {
          if (ite.id === item.id) {
            ite.amount -= 1;
          }
          return ite;
        });
      } else {
        const { listSoftDrink } = this.context;
        this.context.listSoftDrink = listSoftDrink.map((ite) => {
          if (ite.id === item.id) {
            ite.amount -= 1;
          }
          return ite;
        });
      }
    }
  };

  render() {
    const { counter } = this.state;
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
                  item.amount < counter ? item.amount : counter
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
