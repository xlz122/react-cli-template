import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(
  Component: React.ComponentProps<any>
): (props: JSX.IntrinsicAttributes) => JSX.Element {
  function ComponentWithRouterProp(props: JSX.IntrinsicAttributes): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
