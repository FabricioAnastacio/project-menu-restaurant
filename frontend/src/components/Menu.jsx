import React from 'react';
import PropTypes from 'prop-types';
import iconeClose from '../pictures/icons8-fechar-janela-96.png';
import '../style/menu.css';
import { createListMenuBeer } from '../services/createListMenu';
import ItemComponent from './ItemComponent';

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
    const {
      listMenu,
      setBlur,
      imgOpem,
      isbeer,
      isFood,
      isAlcoholFree,
      counterItens,
      counterRequestAmount,
    } = this.props;
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
                <ItemComponent
                  key={ key }
                  item={ item }
                  isFood={ isFood }
                  isAlcoholFree={ isAlcoholFree }
                  getItem={ this.getItem }
                  setBlur={ setBlur }
                  counterItens={ counterItens }
                  counterRequestAmount={ counterRequestAmount }
                />
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
  counterItens: PropTypes.number.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  isFood: PropTypes.bool.isRequired,
  isAlcoholFree: PropTypes.bool.isRequired,
  setBlur: PropTypes.func.isRequired,
  imgOpem: PropTypes.bool.isRequired,
  isbeer: PropTypes.bool.isRequired,
};

export default Menu;
