import React from 'react';
import AppContext from '../context/AppContext';
import Footer from './Footer';
import '../style/requestsList.css';
import '../style/footer.css';

class RequestsList extends React.Component {
  getListRequest = () => {
    const { listMenuFood, listSoftDrink } = this.context;
    const requestItens = [];

    requestItens.push(...listMenuFood.filter((item) => item.amount > 0));
    requestItens.push(...listSoftDrink.filter((item) => item.amount > 0));

    return requestItens;
  };

  render() {
    return (
      <section className="page-requests">
        <div>
          <ul className="list-requests">
            {
              this.getListRequest().map((item, key) => (
                <li key={ key } className="request">
                  <div className="item-title">
                    <div
                      className="imgCart"
                      style={ { backgroundImage: `url(${item.img})` } }
                      aria-hidden="true"
                    />
                    <div className="item-name">
                      <h1>{ item.name }</h1>
                      <p>{ item.value }</p>
                    </div>
                  </div>
                  <button>+</button>
                  <p>{ item.amount }</p>
                  <button>-</button>
                </li>
              ))
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
