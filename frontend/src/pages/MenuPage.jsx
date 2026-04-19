import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Menu from '../components/mobile/menuPage/Menu';
import listFoods from '../data/listFoods';
import Footer from '../components/common/Footer';
import ListCategory from '../components/common/ListCategory';
import '../assets/style/menuPage.css';
import FooterRotes from '../components/FooterRotes';
import AppContext from '../context/AppContext';
import HeaderDesktop from '../components/desktop/Header';
import HeaderMobile from '../components/mobile/Header';
// import qrcode from '../assets/pictures/qrcodeTanjiro.jpg';

class MenuPage extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      allDrinks: false,
      food: true,
      candy: false,
      list: listFoods.food,
      listActual: 'food',
      imgOpen: false,
      counterItens: 0,
      width: window.innerWidth,
      // isVisibleH: false,
      // isVisibleA: false,
    };

    this.pairMap = {
      allDrinks: ['candy', 'food'],
      food: ['allDrinks', 'candy'],
      candy: ['allDrinks', 'food'],
    };
  }

  componentDidMount() {
    const { counterRequest } = this.context;
    const day = new Date().getDay();
    if (day === 0) toast.info('Não estamos funcionando hoje!');
    this.setState({
      counterItens: counterRequest,
    });
  }

  searchItem = (value) => {
    const { listActual } = this.state;
    const { listMenu } = this.context;
    const menuActual = listMenu[listActual];
    if (value.length === 0) return menuActual;
    return menuActual.filter((a) => a.name.toUpperCase().includes(value.toUpperCase()));
  };

  handleChenge = ({ target }) => {
    const { name, checked, type, value } = target;
    const { listMenu } = this.context;
    const relatedKey = this.pairMap[name];

    if (type === 'text') {
      this.setState({
        [name]: value,
        list: this.searchItem(value),
      });
      return;
    }

    if (!checked) return;
    this.setState({
      [name]: checked,
      [relatedKey[0]]: !checked,
      [relatedKey[1]]: !checked,
      list: listMenu[name],
      listActual: name,
    });
  };

  setBlur = () => {
    const { imgOpen } = this.state;
    this.setState({
      imgOpen: !imgOpen,
    });
  };

  counterRequestAmount = (value) => {
    this.context.counterRequest = value;
    this.setState({
      counterItens: value,
    });
  };

  renderDisplayMobile = () => {
    const {
      search,
      allDrinks,
      food,
      candy,
      imgOpen,
      list,
      counterItens,
    } = this.state;

    return (
      <div className="PageMenu">
        <ToastContainer />
        <HeaderMobile
          title="CARDAPIO"
          imgOpen={ imgOpen }
        />
        <ListCategory
          search={ search }
          handleChenge={ this.handleChenge }
          allDrinks={ allDrinks }
          foods={ food }
          setBlur={ imgOpen }
          candy={ candy }
        />
        <Menu
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
          isFood={ food }
          isCandy={ candy }
          listMenu={ list }
          counterItens={ counterItens }
          counterRequestAmount={ this.counterRequestAmount }
        />
        <FooterRotes counterItens={ counterItens } imgOpem={ imgOpen } />
        <Footer imgOpem={ imgOpen } />
      </div>
    );
  };

  renderDisplayDesktop = () => {
    const {
      allDrinks,
      food,
      candy,
      imgOpen,
      list,
      counterItens,
    } = this.state;

    return (
      <div className="PageMenu-desktop">
        <ToastContainer />
        <HeaderDesktop
          title="CARDAPIO"
          imgOpen={ imgOpen }
          handleChenge={ this.handleChenge }
          allDrinks={ allDrinks }
          foods={ food }
          setBlur={ imgOpen }
          candy={ candy }
        />
        <Menu
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
          isFood={ food }
          isCandy={ candy }
          listMenu={ list }
          counterItens={ counterItens }
          counterRequestAmount={ this.counterRequestAmount }
        />
        <Footer imgOpem={ imgOpen } />
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const maxWidth = 920;

    return width > maxWidth ? this.renderDisplayDesktop() : this.renderDisplayMobile();
  }
}

MenuPage.contextType = AppContext;
Menu.contextType = AppContext;

export default MenuPage;
