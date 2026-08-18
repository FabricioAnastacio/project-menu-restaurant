import { useParams, useNavigate } from 'react-router-dom';

export default function wrapperRoute(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    const params = useParams();
    return <Component { ...props } params={ params } navigate={ navigate } />;
  };
}
