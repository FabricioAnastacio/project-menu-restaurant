import { useParams } from 'react-router-dom';

export default function wrapperRoute(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    return <Component { ...props } params={ params } />;
  };
}
