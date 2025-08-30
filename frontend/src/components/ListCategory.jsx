import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../pictures/icons8-search-more-white-96.png';
import '../style/ListCategory.css';

class ListCategory extends React.Component {
  render() {
    const {
      hotDrink,
      drinks,
      foods,
      alcoholFree,
      handleChenge,
      handleChengeThow,
    } = this.props;
    const isDrinks = drinks ? '' : 'none';

    return (
      <div className="Categorys">
        <section className="Select-item">
          <label className={ `Label-select-${drinks}` }>
            <input
              type="checkbox"
              checked={ drinks }
              name="drink"
              onChange={ handleChenge }
            />
            Bebidas
          </label>
          <label className={ `Label-select-${foods}` }>
            <input
              type="checkbox"
              checked={ foods }
              name="food"
              onChange={ handleChenge }
            />
            Burgers
          </label>
        </section>
        <section
          style={ { display: isDrinks } }
          className="Select-item-thow"
        >
          <label className={ `Label-select-thow-${hotDrink}` }>
            <input
              type="checkbox"
              checked={ hotDrink }
              name="hotDrink"
              onChange={ handleChengeThow }
            />
            Refri
          </label>
          <label className={ `Label-select-thow-${alcoholFree}` }>
            <input
              type="checkbox"
              checked={ alcoholFree }
              name="alcoholFree"
              onChange={ handleChengeThow }
            />
            Água
          </label>
        </section>
        <section className="Search_item">
          <img src={ searchIcon } alt="Lupa" />
          <input type="text" placeholder="Buscar..." />
        </section>
      </div>
    );
  }
}

ListCategory.propTypes = {
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
  handleChengeThow: PropTypes.func.isRequired,
  alcoholFree: PropTypes.bool.isRequired,
  hotDrink: PropTypes.bool.isRequired,
};

export default ListCategory;
