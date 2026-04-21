import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../pictures/logo.jpg';

class ItemPromotional extends React.Component {
  render() {
    const { item, className } = this.props;
    return (
      <li className={ className }>
        <Link to={ `/item/${item.group}/${item.id}` }>
          <div
            style={ { backgroundImage: `url(${item.img})` } }
            aria-hidden="true"
            className="Story"
          >
            <div className="Header-story">
              <img className="Logo-status" src={ logo } alt="Logo Big Tanjiro" />
              { item.isNew && (<h1>NOVIDADE</h1>) }
            </div>
            <h5>{ item.nameHighlights }</h5>
          </div>
        </Link>
      </li>
    );
  }
}

ItemPromotional.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameHighlights: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf([]).isRequired,
    group: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default ItemPromotional;
