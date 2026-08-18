import React from 'react';
import PropTypes from 'prop-types';
import ItemPromotional from './ItemPromotional';
import '../style/Carousel.css';
import arrowRigth from '../pictures/icons8-forward-100.png';

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      description: '',
      imag: '',
    };
  }

  opemImag = (imag, desc, group) => {
    if (group === 'highlights' || group === 'combo') {
      this.setState({ imag, description: desc });
    }
  };

  closeImag = () => {
    this.setState({ imag: '', description: '' });
  };

  render() {
    const {
      highlights,
      imgOpem,
      getItem,
      setBlur,
    } = this.props;
    const { imag, description } = this.state;

    return (
      <div className={ `Container-carousel setblur-${imgOpem}` }>
        {
          imag !== '' && (
            <div className="Img_opem_Full">
              <button onClick={ this.closeImag } className="btm_close">X</button>
              <div className="Img_opem_img">
                <h3 className="Img_opem_desc">{ description }</h3>
                <img src={ imag } alt="imagem" />
              </div>
            </div>
          )
        }
        <ul className="carousel">
          {
            highlights.map((item, key) => (
              <ItemPromotional
                className="Item-Promotional"
                key={ key }
                item={ item }
                getItem={ getItem }
                setBlur={ setBlur }
                opemImag={ this.opemImag }
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
