import { FC } from "react";


const WithAuth = (Component:FC) => {
  const isAuthenticate = true;

  return function () {
    if (isAuthenticate) {
     return <Component/>;
    } else {
       return (<p>Please Login</p>);
    }
  };
};

export default WithAuth
