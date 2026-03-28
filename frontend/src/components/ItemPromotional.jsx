import React from 'react';
import PropTypes from 'prop-types';

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
          <h5>{ item.name }</h5>
          <p>{ item.description }</p>
        </div>
      </li>
    );
  }
}

ItemPromotional.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
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
