import React from 'react';
import AppContext from '../context/AppContext';
import '../style/listOrder.css';

class ListOrder extends React.Component {
  constructor() {
    super();

    this.state = {
      listOrder: [],
      valueAll: 0,
    };
  }

  componentDidMount() {
    const { listMenuFood, listBeer, listAlcoholFree } = this.context;
    const { listOrder } = this.state;

    listOrder.push(...listMenuFood.filter((item) => item.amount > 0));
    listOrder.push(...listBeer.filter((item) => item.amount > 0));
    listOrder.push(...listAlcoholFree.filter((item) => item.amount > 0));

    let valueAll = 0;

    listOrder.forEach((item) => {
      valueAll += item.value * item.amount;
    });

    this.setState({
      listOrder,
      valueAll,
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
                <div>
                  <p>{ item.name }</p>
                  <p>{ `R$ ${(item.value * item.amount).toFixed(2)}` }</p>
                </div>
              </li>
            ))
          }
        </ul>
        <h3 className="valueAll">{ `Total: R$ ${valueAll.toFixed(2)}` }</h3>
      </section>
    );
  }
}

ListOrder.contextType = AppContext;

export default ListOrder;
