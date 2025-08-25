import React from 'react';
import PropTypes from 'prop-types';
import iconeClose from '../pictures/icons8-fechar-janela-96.png';
import '../style/menu.css';
import { createListMenuBeer } from '../services/createListMenu';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      imgItem: '',
      nameItem: '',
      description: '',
      value: '',
    };
  }

  getItem = (item) => {
    this.setState({
      imgItem: item.img,
      nameItem: item.name,
      description: item.description,
      value: item.value,
    });
  };

  render() {
    const { imgItem, nameItem, description, value } = this.state;
    const { listMenu, setBlur, imgOpem, isbeer } = this.props;
    const isOpen = imgOpem ? '' : 'none';

    return (
      <main>
        <section style={ { display: isOpen } } className={ `Section-Details-${imgOpem}` }>
          <div>
            <button
              className="Btm-Close"
              onClick={ setBlur }
            >
              <img src={ iconeClose } alt="Fechar" className="Icone-Close" />
            </button>
            <h4>{ nameItem }</h4>
            <button
              className="Btm-fullImg"
              onClick={ setBlur }
            >
              <img src={ imgItem } alt={ nameItem } className="IMG-Full" />
            </button>
            <h4>{ value }</h4>
            <p>{ description }</p>
          </div>
        </section>
        <ul className={ `Ul-${imgOpem}` }>
          {
            isbeer ? createListMenuBeer(listMenu[0], this.getItem, setBlur) : (
              listMenu.map((item, key) => (
                <li key={ key }>
                  <section className="Description_Item">
                    <h3>{ item.name }</h3>
                    <p>{ item.description }</p>
                    <div className="Value_Sale">
                      <h4>{ item.value }</h4>
                      <button>Adicionar</button>
                    </div>
                  </section>
                  <div
                    onClick={ () => { this.getItem(item); setBlur(); } }
                    style={ { backgroundImage: `url(${item.img})` } }
                    aria-hidden="true"
                  />
                </li>
              ))
            )
          }
        </ul>
      </main>
    );
  }
}

Menu.propTypes = {
  listMenu: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setBlur: PropTypes.func.isRequired,
  imgOpem: PropTypes.bool.isRequired,
  isbeer: PropTypes.bool.isRequired,
};

export default Menu;
