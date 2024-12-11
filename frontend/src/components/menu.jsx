import React from 'react';
import PropTypes from 'prop-types';
import picanha from '../imgs/picanha.jpeg';
import '../style/menu.css';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      imgItem: '',
      nameItem: '',
      description: '',
      value: '',
      imgOpem: false,
    };
  }

  getItem = (item) => {
    console.log(item);
    this.setState({
      imgOpem: true,
      imgItem: picanha,
      nameItem: 'Picanha Bolvina',
      description: 'testetstettstets',
      value: 'R$0.00',
    });
  };

  closeImg = () => {
    this.setState({
      imgOpem: false,
    });
  };

  render() {
    const { imgItem, nameItem, description, value, imgOpem } = this.state;
    const { item } = this.props;

    return (
      <main>
        <section className={ `Section-Details-${imgOpem}` }>
          <h4>{ nameItem }</h4>
          <button onClick={ this.closeImg }>
            <img src={ imgItem } alt="picanha" className="IMG-Full" />
          </button>
          <h4>{ value }</h4>
          <p>{ description }</p>
        </section>
        <ul className={ `Ul-${!imgOpem}` }>
          <li>
            <button onClick={ () => this.getItem(item) }>
              <img src={ picanha } alt="picanha" />
              <h4>Picanha Bolvina</h4>
            </button>
            <h4>R$0.00</h4>
          </li>
          <li>
            <button onClick={ () => this.getItem(item) }>
              <img src={ picanha } alt="picanha" />
              <h4>Picanha Bolvina</h4>
            </button>
            <h4>R$0.00</h4>
          </li>
        </ul>
      </main>
    );
  }
}

Menu.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Menu;
