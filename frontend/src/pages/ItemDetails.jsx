import React from 'react';
import PropTypes from 'prop-types';
import wrapperRoute from '../hooks/wrapperRoute';
import AppContext from '../context/AppContext';

class ItemDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      groupFood: ['classic', 'handmade', 'additional'],
      item: {
        name: '',
        img: '',
      },
    };
  }

  componentDidMount() {
    const { groupFood } = this.state;
    const { params: { group, id } } = this.props;
    const { listMenu: { menu: { food, drinks, candy } } } = this.context;

    if (groupFood.includes(group)) this.setState({ item: food[group][id - 1] });
    else if (group === 'drinks') this.setState({ item: drinks[id - 1] });
    else this.setState({ item: candy[id - 1] });
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        <h1>{ item.name }</h1>
        <img src={ item.img } alt={ item.name } style={ { height: '300px' } } />
      </div>
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
