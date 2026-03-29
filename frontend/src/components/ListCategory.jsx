import React from 'react';
import PropTypes from 'prop-types';
import '../style/ListCategory.css';

class ListCategory extends React.Component {
  render() {
    const {
      allDrinks,
      foods,
      candy,
      handleChenge,
      setBlur,
      // isVisibleH,
      // isVisibleA,
    } = this.props;

    return (
      <div className={ `Categorys setblur-${setBlur}` }>
        <section className="Select-item">
          <label className={ `Label-select-${allDrinks}` }>
            <input
              type="checkbox"
              checked={ allDrinks }
              name="allDrinks"
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
          <label className={ `Label-select-${candy}` }>
            <input
              type="checkbox"
              checked={ candy }
              name="candy"
              onChange={ handleChenge }
            />
            Doces
          </label>
        </section>
        {
          foods && (
            <section className="section_links">
              <a className="Link-a" href="#classic">
                Classicos
              </a>
              <a className="Link-a" href="#handmade">
                Artesanais
              </a>
              <a className="Link-a" href="#additional">
                Acompanhamentos
              </a>
            </section>
          )
        }
      </div>
    );
  }
}

ListCategory.propTypes = {
  allDrinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  candy: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
  setBlur: PropTypes.bool.isRequired,
  // isVisibleH: PropTypes.bool.isRequired,
  // isVisibleA: PropTypes.bool.isRequired,
};

export default ListCategory;
