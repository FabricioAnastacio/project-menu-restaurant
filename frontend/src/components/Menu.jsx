import React from 'react';
import PropTypes from 'prop-types';
import '../style/menu.css';
import ItemComponent from './ItemComponent';
import { createListMenuBurguer } from '../services/createListMenu';
import Carousel from './Carousel';
import listHighlights from '../data/listHighlights';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      data: new Date().getDay(),
      highlights: listHighlights,
    };
  }

  rederCarousel = () => {
    const { highlights, data } = this.state;
    const { listMenu } = this.props;

    const allHighlights = [...listMenu.combo, ...highlights];
    const displayHighlights = allHighlights.filter(
      (item) => item.displayDate.includes(data),
    );

    return (
      <Carousel
        highlights={ displayHighlights }
      />
    );
  };

  render() {
    const {
      listMenu,
      isFood,
      isCandy,
      counterItens,
      counterRequestAmount,
    } = this.props;
    return (
      <main>
        { isFood && this.rederCarousel() }
        {
          isFood ? (
            createListMenuBurguer(
              listMenu,
              counterItens,
              counterRequestAmount,
            )
          ) : (
            <ul className={ `Ul-${false}` }>
              {
                listMenu.map((item, key) => (
                  <ItemComponent
                    key={ key }
                    item={ item }
                    isFood={ isFood }
                    isCandy={ isCandy }
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
  listMenu: PropTypes.objectOf({
    combo: PropTypes.array.isRequired,
    classic: PropTypes.array.isRequired,
    additional: PropTypes.array.isRequired,
    handmade: PropTypes.array.isRequired,
  }).isRequired,
  counterItens: PropTypes.number.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  isFood: PropTypes.bool.isRequired,
  isCandy: PropTypes.bool.isRequired,
};

export default Menu;
