import React from "react";
import { Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import AccessDenied from "../components/AccessDenied/AccessDenied";

const ProtectedRoute = (route) => {
    //   const { user } = useSelector((state) => state.user);
//   var permittedRole = user.roles;
  let isProtected = true;

  return (
    <Route
      path={route.path}
      render={(props) =>
        isProtected ? <route.component {...props} /> : <AccessDenied />
      }
    ></Route>
  );
};

export default ProtectedRoute;
