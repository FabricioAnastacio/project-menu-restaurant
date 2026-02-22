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
    const {
      listMenuFood,
      listBeer, listAlcoholFree, listAdditional, valueTotal } = this.context;
    const { listOrder } = this.state;

    listOrder.push(...listMenuFood.filter((item) => item.amount > 0));
    listOrder.push(...listBeer.filter((item) => item.amount > 0));
    listOrder.push(...listAlcoholFree.filter((item) => item.amount > 0));
    listOrder.push(...listAdditional.sauce.filter((item) => item.amount > 0));

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
        <h3 className="valueAll">{ `Total: R$ ${valueAll}` }</h3>
      </section>
    );
  }
}

ListOrder.contextType = AppContext;

export default ListOrder;
