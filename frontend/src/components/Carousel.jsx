import React from 'react';
import PropTypes from 'prop-types';
import ItemPromotional from './ItemPromotional';

class Carousel extends React.Component {
  render() {
    const {
      highlights,
      imgOpem,
      getItem,
      setBlur,
    } = this.props;
    return (
      <div className={ `Container-carousel setblur-${imgOpem}` }>
        <h1 className="arrow left">{ ' ' }</h1>
        <ul className="carousel">
          {
            highlights.map((item, key) => (
              <ItemPromotional
                className="Item-Promotional"
                key={ key }
                item={ item }
                getItem={ getItem }
                setBlur={ setBlur }
              />
            ))
          }
        </ul>
        <h1 className="arrow rigth">{ ' ' }</h1>
      </div>
    );
  }
}

Carousel.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  imgOpem: PropTypes.bool.isRequired,
  getItem: PropTypes.func.isRequired,
  setBlur: PropTypes.bool.isRequired,
};

export default Carousel;
