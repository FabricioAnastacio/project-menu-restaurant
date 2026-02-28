import React from 'react';
import AppContext from '../context/AppContext';
import '../style/listOrder.css';

const TX = 4;

class ListOrder extends React.Component {
  constructor() {
    super();

    this.state = {
      listOrder: [],
      valueAll: 0,
    };
  }

  componentDidMount() {
    const {
      listMenu: { food, candy, allDrinks, additional },
      valueTotal,
    } = this.context;
    const { listOrder } = this.state;

    listOrder.push(...food.filter((item) => item.amount > 0));
    listOrder.push(...allDrinks.filter((item) => item.amount > 0));
    listOrder.push(...candy.filter((item) => item.amount > 0));
    listOrder.push(...additional.sauce.filter((item) => item.amount > 0));

    this.setState({
      listOrder,
      valueAll: valueTotal,
    });
  }

  render() {
    const { listOrder, valueAll } = this.state;
    return (
      <section className="Component-listOrder">
        <ul className="List-Order">
          {
            listOrder.map((item, i) => (
              <li key={ i }>
                <p>{ item.amount }</p>
                { item.obs !== '' && (<p className="Tag-Item">Edited</p>)}
                <div>
                  <p className="Iten-name">{ item.name }</p>
                  <p>{ `R$ ${(item.value * item.amount).toFixed(2)}` }</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="CustFinally">
          <h5>
            <span>Pedido:</span>
            <span>{ `R$${valueAll}` }</span>
          </h5>
          <h5>
            <span>Tx Entrega:</span>
            <span>+R$4.00</span>
          </h5>
          <h3>
            <span>Total:</span>
            <span>{ `R$${(Number(valueAll) + TX).toFixed(2)}` }</span>
          </h3>
        </div>
      </section>
    );
  }
}

ListOrder.contextType = AppContext;

export default ListOrder;
