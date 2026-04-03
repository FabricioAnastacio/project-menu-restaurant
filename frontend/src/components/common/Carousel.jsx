import React from 'react';
import PropTypes from 'prop-types';
import ItemPromotional from './ItemPromotional';
import '../../layouts/mobile/menuPage/Carousel.css';

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
