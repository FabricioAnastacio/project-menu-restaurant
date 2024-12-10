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
    };
  }

  getItem = (item) => {
    console.log(item);
    this.setState({
      imgItem: item.img,
      nameItem: item.name,
      description: item.description,
      value: item.value,
    });
  };

  render() {
    const { imgItem, nameItem, description, value } = this.state;
    const { item } = this.props;

    return (
      <main>
        <section className="Section-Details">
          <img src={ imgItem } alt="picanha" className="IMG-Full" />
          <h4>{ nameItem }</h4>
          <p>{ description }</p>
          <h4>{ value }</h4>
        </section>
        <ul>
          <li>
            <button onClick={ () => this.getItem(item) }>
              <img src={ picanha } alt="picanha" />
              <h4>Picanha Bolvina</h4>
            </button>
            <h4>R$0.00</h4>
          </li>
          <li>
            <button>
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
