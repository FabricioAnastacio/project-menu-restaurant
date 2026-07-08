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
    const { to, children, navigate, className, direction, funcClick } = this.props;

    if (!document.startViewTransition) {
      return (
        <button
          className={ className }
          onClick={ () => {
            navigate(to);
            this.saveLocation();
            funcClick();
          } }
        >
          { children }
        </button>
      );
    }

    return (
      <button
        className={ className }
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
  funcClick: PropTypes.func.isRequired,
};

export default navigateLink(TransitionLink);
