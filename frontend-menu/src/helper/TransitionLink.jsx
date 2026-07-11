import React from 'react';
import PropTypes from 'prop-types';
import navigateLink from '../hooks/navigateLink';
import AppContext from '../context/AppContext';

class TransitionLink extends React.Component {
  componentDidMount() {
    const { getLocationScroll } = this.context;

    window.scrollTo(0, getLocationScroll(window.location));
  }

  saveLocation = () => {
    const { saveLocationScroll } = this.context;

    saveLocationScroll(window.location.pathname, window.scrollY);
  };

  render() {
    const { to, children, navigate, className, direction, disabled } = this.props;

    if (!document.startViewTransition) {
      return (
        <button
          className={ className }
          disabled={ disabled }
          onClick={ () => {
            navigate(to);
            this.saveLocation();
          } }
        >
          { children }
        </button>
      );
    }

    return (
      <button
        className={ className }
        disabled={ disabled }
        onClick={ () => {
          document.documentElement.dataset.direction = direction;
          document.startViewTransition(() => {
            navigate(to);
          });
          this.saveLocation();
        } }
      >
        { children }
      </button>
    );
  }
}

TransitionLink.contextType = AppContext;

TransitionLink.propTypes = {
  navigate: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  direction: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default navigateLink(TransitionLink);
