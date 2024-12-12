import React from 'react';
import PropTypes from 'prop-types';
import '../style/menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      imgItem: '',
      nameItem: '',
      description: '',
      value: '',
    };
  }

  getItem = (item) => {
    this.setState({
      imgItem: item.img,
      nameItem: item.name,
      description: item.description,
      value: item.value,
    });
  };

  render() {
    const { imgItem, nameItem, description, value } = this.state;
    const { listMenu, setBlur, imgOpem } = this.props;

    return (
      <main>
        <section className={ `Section-Details-${imgOpem}` }>
          <div>
            <h4>{ nameItem }</h4>
            <button
              className="Btm-fullImg"
              onClick={ setBlur }
            >
              <img src={ imgItem } alt="picanha" className="IMG-Full" />
            </button>
            <h4>{ value }</h4>
            <p>{ description }</p>
            <button>
              <Link to="/avaliation">Avaliar</Link>
            </button>
          </div>
        </section>
        <ul className={ `Ul-${!imgOpem}` }>
          {
            listMenu.map((item, key) => (
              <li key={ key }>
                <button onClick={ () => { this.getItem(item); setBlur(); } }>
                  <img src={ item.img } alt="picanha" />
                  <h4>{ item.name }</h4>
                </button>
                <h4>{ item.value }</h4>
              </li>
            ))
          }
        </ul>
      </main>
    );
  }
}

Menu.propTypes = {
  listMenu: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setBlur: PropTypes.func.isRequired,
  imgOpem: PropTypes.bool.isRequired,
};

export default Menu;
