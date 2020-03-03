import React from "react";
import {connect} from 'react-redux';
import {Redirect, Route} from "react-router-dom";

export const querystring = (name, url = window.location.href) => {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const UnauthenticatedRoute = ({component: C, isAuthenticated, redirect: redi, ...rest}) => {

  const redirect = querystring("redirect", redi);
  return (
    <Route
      {...rest}
      render={props => {
        return (
          !isAuthenticated
            ? <C {...props} />
            : <Redirect
              to={redirect === "" || redirect === null ? "/" : redirect}
            />
        )
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticate.isAuthenticated,
});

export default connect(mapStateToProps)(UnauthenticatedRoute);
