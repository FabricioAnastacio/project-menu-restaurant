import React from 'react';
import AppContext from '../context/AppContext';
import Footer from './Footer';
import '../style/requestsList.css';
import '../style/footer.css';

class RequestsList extends React.Component {
  render() {
    const listCart = this.context;

    return (
      <section className="page-requests">
        <div>
          <ul className="list-requests">
            {
              listCart.map((item, key) => (
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
        <Footer />
      </section>
    );
  }
}

RequestsList.contextType = AppContext;

export default RequestsList;
