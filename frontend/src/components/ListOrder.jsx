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
      listMenu: { food, candy,
        allDrinks: { alcoholFree, beer },
        additional,
      },
      valueTotal,
    } = this.context;
    const { listOrder } = this.state;

    listOrder.push(...food.filter((item) => item.amount > 0));
    listOrder.push(...beer.filter((item) => item.amount > 0));
    listOrder.push(...alcoholFree.filter((item) => item.amount > 0));
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
                  <p>{ item.name }</p>
                  <p>{ `R$ ${(item.value * item.amount).toFixed(2)}` }</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="CustFinally">
          <h5>{ `Pedido:_______R$${valueAll}` }</h5>
          <h5>Tx Entrega:__+R$4.00</h5>
          <h3>{ `Total:__R$${(Number(valueAll) + TX).toFixed(2)}` }</h3>
        </div>
      </section>
    );
  }
}

ListOrder.contextType = AppContext;

export default ListOrder;
