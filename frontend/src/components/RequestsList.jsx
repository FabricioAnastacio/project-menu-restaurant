import React from 'react';
import AppContext from '../context/AppContext';
import Footer from './Footer';
import '../style/requestsList.css';
import '../style/footer.css';

class RequestsList extends React.Component {
  constructor() {
    super();

    this.state = {
      valueTotal: 0,
      requestFoods: [],
      requestDrinks: [],
      requestSoftDrinks: [],
    };
  }

  componentDidMount() {
    const { listMenuFood, listDrink, listAlcoholFree } = this.context;
    const requestFoods = [];
    const requestDrinks = [];
    const requestSoftDrinks = [];

    requestFoods.push(...listMenuFood.filter((item) => item.amount > 0));
    requestDrinks.push(...listDrink.filter((item) => item.amount > 0));
    requestSoftDrinks.push(...listAlcoholFree.filter((item) => item.amount > 0));

    const requestAllItens = [...requestFoods, ...requestDrinks, ...requestSoftDrinks];

    let valueTotal = 0;
    requestAllItens.forEach((item) => {
      const counter = item.amount * item.value;
      valueTotal += counter;
    });

    this.setState({
      valueTotal,
      requestFoods,
      requestDrinks,
      requestSoftDrinks,
    });
  }

  addNewItem = (item, type) => {
    const { requestSoftDrinks, requestFoods, requestDrinks, valueTotal } = this.state;
    this.setState({
      valueTotal: valueTotal + item.value,
    });

    if (type === 'food') {
      this.setState({
        requestFoods: requestFoods.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    } else if (type === 'drink') {
      this.setState({
        requestDrinks: requestDrinks.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    } else {
      this.setState({
        requestSoftDrinks: requestSoftDrinks.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    }
  };

  removeItem = (item, type) => {
    const { requestSoftDrinks, requestFoods, requestDrinks, valueTotal } = this.state;
    this.setState({
      valueTotal: valueTotal - item.value,
    });

    if (type === 'food') {
      this.setState({
        requestFoods: requestFoods.filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 && a;
        }),
      });
    } else if (type === 'drink') {
      this.setState({
        requestDrinks: requestDrinks.filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 ?? a;
        }),
      });
    } else {
      this.setState({
        requestSoftDrinks: requestSoftDrinks.filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 && a;
        }),
      });
    }
  };

  renderItemHtml = (item, key, type) => (
    <li key={ key } className="request">
      {console.log(item)}
      <div className="item-title">
        <div
          className="imgCart"
          style={ { backgroundImage: `url(${item.img})` } }
          aria-hidden="true"
        />
        <div className="item-name">
          <h1>{ item.name }</h1>
          <p>{ `R$${item.value.toFixed(2)}` }</p>
        </div>
      </div>
      <button onClick={ () => this.addNewItem(item, type) }>+</button>
      <p>{ item.amount }</p>
      <button onClick={ () => this.removeItem(item, type) }>-</button>
    </li>
  );

  render() {
    const { valueTotal, requestFoods, requestDrinks, requestSoftDrinks } = this.state;

    return (
      <section className="page-requests">
        <div>
          <section className="header-request" id="Header">
            <div className="cost">
              <h4 className="value-total">{ `Total: R$ ${valueTotal.toFixed(2)}` }</h4>
            </div>
            <div className="img-header" />
          </section>
          <ul className="list-requests">
            {
              requestFoods.map((item, key) => this.renderItemHtml(item, key, 'food'))
            }
            {
              requestDrinks.map((item, key) => this.renderItemHtml(item, key, 'drink'))
            }
            {
              requestSoftDrinks.map(
                ((item, key) => this.renderItemHtml(item, key, 'softDrink')),
              )
            }
          </ul>
        </div>
        <Footer imgOpem={ false } />
      </section>
    );
  }
}

RequestsList.contextType = AppContext;

export default RequestsList;
