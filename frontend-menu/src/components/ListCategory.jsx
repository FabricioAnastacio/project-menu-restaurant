import React from 'react';
import PropTypes from 'prop-types';
import '../style/ListCategory.css';
import { HashLink } from 'react-router-hash-link';

class ListCategory extends React.Component {
  render() {
    const {
      drinks,
      foods,
      candy,
      handleChenge,
    } = this.props;

    return (
      <div className={ `Categorys setblur-${false}` }>
        <section className="Select-item">
          <label className={ `Label-select-${drinks}` }>
            <input
              type="checkbox"
              checked={ drinks }
              name="drinks"
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
              <HashLink smooth className="Link-a" to="#classic">
                Classicos
              </HashLink>
              <HashLink smooth className="Link-a" to="#handmade">
                Artesanais
              </HashLink>
              <HashLink smooth className="Link-a" to="#additional">
                Acompanhamentos
              </HashLink>
            </section>
          )
        }
      </div>
    );
  }
}

ListCategory.propTypes = {
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  candy: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
};

export default ListCategory;
