import React from 'react';
import PropTypes from 'prop-types';
import ItemPromotional from './ItemPromotional';
import '../style/Carousel.css';
import arrowRigth from '../pictures/icons8-forward-100.png';

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
        {
          highlights.length > 2 && (
            <p className="Indicative_arrow">
              <img
                src={ arrowRigth }
                alt="Seta para direita"
              />
            </p>
          )
        }
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
