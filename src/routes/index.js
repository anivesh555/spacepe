import Home from "../components/Home/Home";
import NotFound from "../pages/NotFound";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";


const routes = [
    {
      path: "/",
      component: Home,
      title: "Home",
      permittedUser: [],
    },
    {
      path: "/register",
      component: Registration,
      title: "Registration Page",
      permittedUser: [],
    },
    {
      path: "/login",
      component: Login,
      title: "Registration Page",
      permittedUser: [],
    },
    {
        path: "*",
        component: NotFound,
        title: "Not Found",
        permittedUser: [],
      },
];
    
export default routes;
    