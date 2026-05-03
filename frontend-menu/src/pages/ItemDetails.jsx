import React from 'react';
import PropTypes from 'prop-types';
import wrapperRoute from '../hooks/wrapperRoute';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import '../style/itemDetails.css';
import DetailsItem from '../components/DetailsItem';
import FooterRotes from '../components/FooterRotes';

class ItemDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      groupFood: ['classic', 'handmade', 'additional', 'combo'],
      item: {
        name: '',
        img: '',
        ingredients: [],
        description: '',
        additional: [],
        value: 0,
      },
      counterItens: 0,
    };
  }

  componentDidMount() {
    const { groupFood } = this.state;
    const { params: { group, id } } = this.props;
    const { listMenu: { menu: { food, drinks, candy } }, counterRequest } = this.context;

    if (groupFood.includes(group)) this.setState({ item: food[group][id - 1] });
    else if (group === 'drinks') this.setState({ item: drinks[id - 1] });
    else this.setState({ item: candy[id - 1] });
    this.setState({ counterItens: counterRequest });
  }

  counterRequestAmount = (value) => {
    this.context.counterRequest = value;
    this.setState({
      counterItens: value,
    });
  };

  render() {
    const { item, counterItens } = this.state;
    const { counterRequest } = this.context;

    return (
      <main className="Page-ItemDetails">
        <DetailsItem
          item={ item }
          counterRequestAmount={ this.counterRequestAmount }
          counterItens={ counterItens }
        />
        <Footer />
        <FooterRotes counterItens={ counterRequest } />
      </main>
    );
  }
}

ItemDetails.contextType = AppContext;

ItemDetails.propTypes = {
  params: PropTypes.shape({
    group: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default wrapperRoute(ItemDetails);
