import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({
  auth,
  component: Component,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
}
