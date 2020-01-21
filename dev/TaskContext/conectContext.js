import React from "react";
import MyContext from "../context";

export function conectContext(WrappedComponent) {
  return class AuthHOC extends React.Component {
    render() {
      return (
        <MyContext.Consumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </MyContext.Consumer>
      );
    }
  };
}
