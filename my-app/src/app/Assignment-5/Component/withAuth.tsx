const WithAuth = (Component) => {
  const isAuthenticate = true;

  return function (props) {
    if (isAuthenticate) {
     return <Component {...props} />;
    } else {
       return (<p>Please Login</p>);
    }
  };
};

export default WithAuth
