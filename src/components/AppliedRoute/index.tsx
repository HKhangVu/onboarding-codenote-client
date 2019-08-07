import React from 'react';
import { Route } from 'react-router-dom';

interface INewProps {
  component: any,
  props?:any,
  [id:string]:any,
}

const AppliedRoute = ({ component: C, props: cProps, ...rest }:INewProps) => {
  return (
    <Route {...rest} 
    render={props => {
      return (
        <C {...props} {...cProps} />
      );
    }} 
    />
  );
}
  

export default (AppliedRoute);
