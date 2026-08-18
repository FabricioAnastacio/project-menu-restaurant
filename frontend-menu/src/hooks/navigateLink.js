import { useNavigate } from 'react-router-dom';

export default function navigateLink(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component { ...props } navigate={ navigate } />;
  };
}
