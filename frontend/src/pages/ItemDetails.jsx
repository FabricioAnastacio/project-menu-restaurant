import React from 'react';
import PropTypes from 'prop-types';
import wrapperRoute from '../hooks/wrapperRoute';
import AppContext from '../context/AppContext';

class ItemDetails extends React.Component {
  render() {
    const { params: { group, id } } = this.props;
    const { listMenu: { food } } = this.context;
    console.log(food[group][id]);
    return (
      <div>
        <h1>{ group }</h1>
        <h1>{ id }</h1>
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
