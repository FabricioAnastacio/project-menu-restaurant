import React from 'react';
import PropTypes from 'prop-types';
import logo from '../pictures/logo.jpg';

class ItemPromotional extends React.Component {
  render() {
    const { getItem, item, setBlur, className } = this.props;
    return (
      <li className={ className }>
        <div
          onClick={ () => { getItem(item); setBlur(); } }
          style={ { backgroundImage: `url(${item.img})` } }
          aria-hidden="true"
        >
          <img className="Logo-status" src={ logo } alt="Logo Big Tanjiro" />
          <h5>{ item.nameHighlights }</h5>
        </div>
      </li>
    );
  }
}

ItemPromotional.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameHighlights: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf([]).isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  getItem: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  setBlur: PropTypes.func.isRequired,
};

export default ItemPromotional;
