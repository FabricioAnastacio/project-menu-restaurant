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
import InfoOperation from '../components/InfoOperation';

class MenuPage extends React.Component {
  constructor() {
    super();

    this.state = {
      drinks: false,
      food: true,
      candy: false,
      list: listFoods,
      counterItens: 0,
      width: window.innerWidth,
    };

    this.pairMap = {
      drinks: ['candy', 'food'],
      food: ['drinks', 'candy'],
      candy: ['drinks', 'food'],
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

  handleChenge = ({ target }) => {
    const { name, checked } = target;
    const { listMenu: { menu } } = this.context;
    const relatedKey = this.pairMap[name];

    if (!checked) return;
    this.setState({
      [name]: checked,
      [relatedKey[0]]: !checked,
      [relatedKey[1]]: !checked,
      list: menu[name],
    });
  };

  counterRequestAmount = (value) => {
    this.context.counterRequest = value;
    this.setState({
      counterItens: value,
    });
  };

  render() {
    const {
      drinks,
      food,
      candy,
      list,
      counterItens,
      width,
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

    console.log(list);

    return (
      <div className="PageMenu">
        <ToastContainer />
        <Header
          title="CARDAPIO"
        />
        <ListCategory
          handleChenge={ this.handleChenge }
          drinks={ drinks }
          foods={ food }
          candy={ candy }
        />
        <InfoOperation />
        <Menu
          isFood={ food }
          isCandy={ candy }
          listMenu={ list }
          counterItens={ counterItens }
          counterRequestAmount={ this.counterRequestAmount }
        />
        <FooterRotes counterItens={ counterItens } />
        <Footer />
      </div>
    );
  }
}

MenuPage.contextType = AppContext;
Menu.contextType = AppContext;

export default MenuPage;
