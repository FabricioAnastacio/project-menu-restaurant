import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class ItemComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      counterItem: 0,
      groupFood: ['classic', 'handmade', 'additional', 'combo'],
      valueOrder: 0.00,
    };
  }

  componentDidMount() {
    const { item } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    this.setState({
      counterItem: item.amount,
    });

    if (item.group === 'classic' || item.group === 'handmade') {
      if (foodChenged[item.group].length === 0) return;
      foodChenged[item.group].forEach((itemChenge) => {
        if (itemChenge.id === item.id) {
          this.setState((prevState) => ({
            valueOrder: itemChenge.value * itemChenge.amount + prevState.valueOrder,
          }));
        }
      });
    }
  }

  addNewItem = (item) => {
    const { counterRequestAmount, counterItens } = this.props;

    if (item.amount === 0) counterRequestAmount(counterItens + 1);
    item.amount += 1;

    this.setState({ counterItem: item.amount });
  };

  removeItem = (item) => {
    const { counterRequestAmount, counterItens } = this.props;
    const { counterItem } = this.state;

    if (item.amount === 0) return;
    if (counterItem > 0) item.amount -= 1;
    if (item.amount === 0) counterRequestAmount(counterItens - 1);

    this.setState({ counterItem: item.amount });
  };

  render() {
    const { groupFood, valueOrder } = this.state;
    const { item, isFood, isCandy } = this.props;

    const numItem = item.name.split('-')[0];
    const nameItem = item.name.split('-')[1];

    return (
      <li className="Menu_item" id={ `${item.group}item${item.id}` }>
        <section className="Description_Item">
          <div className="title-item">
            <h3 className="number-item">{ numItem }</h3>
            <h3 className="text-item">{ nameItem }</h3>
          </div>
          <p>
            {
              item.ingredients.map((ing, i) => (
                i + 1 === item.ingredients.length
                  ? `e ${ing}.`
                  : `${ing}, `
              ))
            }
          </p>
          <div className="Value_Sale">
            <h4 className="price">{ `R$${item.value.toFixed(2)}` }</h4>
            <div className="buttons-sale">
              <button
                className="sell"
                onClick={ () => this.removeItem(item, isFood, isCandy) }
              >
                -
              </button>
              <p className={ item.amount > 0 ? 'item-buy' : 'item' }>
                {
                  item.amount
                }
              </p>
              <button
                className="buy"
                onClick={ () => this.addNewItem(item, isFood, isCandy) }
              >
                +
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="AriaButton">
            <HashLink
              to={
                groupFood.includes(item.group) && `/item/${item.group}/${item.id}/#Header`
              }
            >
              <div
                className="imgs-menu"
                style={ { backgroundImage: `url(${item.img})` } }
                aria-hidden="true"
              />
              <p>{ groupFood.includes(item.group) && 'Ver detalhes' }</p>
            </HashLink>
          </div>
          <div>
            <p className="Title_info_order">Pedido</p>
            <p className="Value_order">
              { (item.value * item.amount + valueOrder).toLocaleString(
                'pt-BR',
                { style: 'currency', currency: 'BRL' },
              ) }
            </p>
          </div>
        </section>
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
    ingredients: PropTypes.arrayOf([]).isRequired,
    group: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  isFood: PropTypes.bool.isRequired,
  isCandy: PropTypes.bool.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  counterItens: PropTypes.number.isRequired,
};

export default ItemComponent;
