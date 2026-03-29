import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Menu from '../components/Menu';
import listFoods from '../data/listFoods';
import Footer from '../components/Footer';
import ListCategory from '../components/ListCategory';
import '../style/menuPage.css';
import FooterRotes from '../components/FooterRotes';
import AppContext from '../context/AppContext';
import qrcode from '../pictures/qrcodeTanjiro.jpg';

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

  // onVisible = (isVisible, type) => {
  //   switch (type) {
  //   case 'H':
  //     this.setState({ isVisibleH: isVisible });
  //     break;
  //   case 'A':
  //     this.setState({ isVisibleA: isVisible });
  //     break;
  //   default:
  //     break;
  //   }
  // };

  render() {
    const {
      search,
      allDrinks,
      food,
      candy,
      imgOpen,
      list,
      counterItens,
      width,
      // isVisibleH,
      // isVisibleA,
    } = this.state;
    const maxWidth = 920;
    if (width > maxWidth) {
      return (
        <div className="Desktop-msg">
          <h1>Atenção</h1>
          <img className="qrcode" src={ qrcode } alt="Qr code Big lanches do Tanjiro" />
          <p>Nosso sistema não esta disponivel para desktop no momento!</p>
          <p>Por favor, escaneie o QR code e acesse pelo celular.</p>
        </div>
      );
    }

    return (
      <div className="PageMenu">
        <ToastContainer />
        <Header
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
          // isVisibleH={ isVisibleH }
          // isVisibleA={ isVisibleA }
        />
        <Menu
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
          isFood={ food }
          isCandy={ candy }
          listMenu={ list }
          counterItens={ counterItens }
          counterRequestAmount={ this.counterRequestAmount }
          // onVisible={ this.onVisible }
        />
        <FooterRotes counterItens={ counterItens } imgOpem={ imgOpen } />
        <Footer imgOpem={ imgOpen } />
      </div>
    );
  }
}

MenuPage.contextType = AppContext;
Menu.contextType = AppContext;

export default MenuPage;
