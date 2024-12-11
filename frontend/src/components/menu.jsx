import React from 'react';
import PropTypes from 'prop-types';
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
      imgItem: item.img,
      nameItem: item.name,
      description: item.description,
      value: item.value,
    });
  };

  closeImg = () => {
    this.setState({
      imgOpem: false,
    });
  };

  render() {
    const { imgItem, nameItem, description, value, imgOpem } = this.state;
    const { listMenu } = this.props;

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
          {
            listMenu.map((item, key) => (
              <li key={ key }>
                <button onClick={ () => this.getItem(item) }>
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
};

export default Menu;
