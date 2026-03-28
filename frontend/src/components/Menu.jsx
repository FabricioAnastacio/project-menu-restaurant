import React from 'react';
import PropTypes from 'prop-types';
import iconeClose from '../pictures/icons8-fechar-janela-96.png';
import listFoods from '../data/listFoods';
import '../style/menu.css';
import ItemComponent from './ItemComponent';
import { createListMenuBurguer } from '../services/createListMenu';
import Carousel from './Carousel';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      imgItem: '',
      nameItem: '',
      description: '',
      value: '',
      highlights: listFoods.highlights,
    };
    // this.elementRef1 = createRef();
    // this.elementRef2 = createRef();
  }

  // componentDidMount() {
  //   const { onVisible } = this.props;
  //   this.observer = new IntersectionObserver((entrys) => {
  //     entrys.forEach((entry) => {
  //       if (entry.target === this.elementRef1.current) {
  //         onVisible(entry.isIntersecting, 'H');
  //       }
  //       if (entry.target === this.elementRef2.current) {
  //         onVisible(entry.isIntersecting, 'A');
  //       }
  //     });
  //   }, {
  //     threshold: 0.5,
  //   });

  //   if (this.elementRef1.current) this.observer.observe(this.elementRef1.current);
  //   if (this.elementRef2.current) this.observer.observe(this.elementRef2.current);
  // }

  // componentWillUnmount() {
  //   if (this.observer) {
  //     this.observer.disconnect();
  //   }
  // }

  getItem = (item) => {
    this.setState({
      imgItem: item.img,
      nameItem: item.name,
      description: item.description,
      value: item.value,
    });
  };

  render() {
    const { imgItem, nameItem, description, value, highlights } = this.state;
    const {
      listMenu,
      setBlur,
      imgOpem,
      isFood,
      isCandy,
      counterItens,
      counterRequestAmount,
    } = this.props;
    const isOpen = imgOpem ? '' : 'none';
    return (
      <main>
        <Carousel
          highlights={ highlights }
          imgOpem={ imgOpem }
          getItem={ this.getItem }
          setBlur={ setBlur }
        />
        <section style={ { display: isOpen } } className={ `Section-Details-${imgOpem}` }>
          <div>
            <button
              className="Btm-Close"
              onClick={ setBlur }
            >
              <img src={ iconeClose } alt="Fechar" className="Icone-Close" />
            </button>
            <h4>{ nameItem }</h4>
            <button
              className="Btm-fullImg"
              onClick={ setBlur }
            >
              <img src={ imgItem } alt={ nameItem } className="IMG-Full" />
            </button>
            {
              value > 0 && (
                <h4>{ `R$${Number(value).toFixed(2)}` }</h4>
              )
            }
            <p>{ description }</p>
          </div>
        </section>
        {
          isFood ? (
            createListMenuBurguer(
              listMenu,
              this.getItem,
              setBlur,
              imgOpem,
              counterItens,
              counterRequestAmount,
              // this.elementRef1,
              // this.elementRef2,
            )
          ) : (
            <ul className={ `Ul-${imgOpem}` }>
              {
                listMenu.map((item, key) => (
                  <ItemComponent
                    key={ key }
                    item={ item }
                    isFood={ isFood }
                    isCandy={ isCandy }
                    getItem={ this.getItem }
                    setBlur={ setBlur }
                    counterItens={ counterItens }
                    counterRequestAmount={ counterRequestAmount }
                  />
                ))
              }
            </ul>
          )
        }
      </main>
    );
  }
}

Menu.propTypes = {
  listMenu: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  counterItens: PropTypes.number.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  isFood: PropTypes.bool.isRequired,
  isCandy: PropTypes.bool.isRequired,
  setBlur: PropTypes.func.isRequired,
  imgOpem: PropTypes.bool.isRequired,
  // onVisible: PropTypes.func.isRequired,
};

export default Menu;
