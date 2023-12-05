
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// import { Route, Routes, Switch, useLocation } from "react-router-dom";
import routes from "./routes/index";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./pages/Layout";
import './App.css';
// import RegistrationPage from "./pages/RegistrationPage";


function App() {
  const isAuth = true
  return (
    <Fragment>
      {/* <Route exact path="/register" component={RegistrationPage} /> */}

      
      {isAuth && (
        <Layout>
          <Switch>
            {routes.map((route, index) => (
              <ProtectedRoute key={index} exact path={route.path} {...route} />
            ))}
          </Switch>
        </Layout>
      )}
    </Fragment>
  );
}

export default App;
