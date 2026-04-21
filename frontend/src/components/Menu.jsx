import React from 'react';
import PropTypes from 'prop-types';
import iconeClose from '../pictures/icons8-fechar-janela-96.png';
import listFoods from '../data/listFoods';
import '../style/menu.css';
import ItemComponent from './ItemComponent';
import { createListMenuBurguer } from '../services/createListMenu';
import Carousel from './Carousel';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      data: new Date().getDay(),
      imgItem: '',
      nameItem: '',
      description: '',
      value: '',
      highlights: listFoods.highlights,
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

  rederCarousel = () => {
    const { highlights, data } = this.state;
    const { listMenu, imgOpem, setBlur } = this.props;

    const allHighlights = [...listMenu.combo, ...highlights];
    const displayHighlights = allHighlights.filter(
      (item) => item.displayDate.includes(data),
    );

    return (
      <Carousel
        highlights={ displayHighlights }
        imgOpem={ imgOpem }
        getItem={ this.getItem }
        setBlur={ setBlur }
      />
    );
  };

  render() {
    const { imgItem, nameItem, description, value } = this.state;
    const {
      listMenu,
      setBlur,
      imgOpem,
      isFood,
      isCandy,
      counterItens,
      counterRequestAmount,
    } = this.props;
    const isOpen = imgOpem ? '' : 'none';
    return (
      <main>
        { isFood && this.rederCarousel() }
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
            {
              value > 0 && (
                <h4>{ `R$${Number(value).toFixed(2)}` }</h4>
              )
            }
            <p>{ description }</p>
          </div>
        </section>
        {
          isFood ? (
            createListMenuBurguer(
              listMenu,
              this.getItem,
              setBlur,
              imgOpem,
              counterItens,
              counterRequestAmount,
            )
          ) : (
            <ul className={ `Ul-${imgOpem}` }>
              {
                listMenu.map((item, key) => (
                  <ItemComponent
                    key={ key }
                    item={ item }
                    isFood={ isFood }
                    isCandy={ isCandy }
                    getItem={ this.getItem }
                    setBlur={ setBlur }
                    counterItens={ counterItens }
                    counterRequestAmount={ counterRequestAmount }
                  />
                ))
              }
            </ul>
          )
        }
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
  isCandy: PropTypes.bool.isRequired,
  setBlur: PropTypes.func.isRequired,
  imgOpem: PropTypes.bool.isRequired,
};

export default Menu;
