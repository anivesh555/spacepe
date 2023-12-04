import Home from "../components/Home/Home";
import NotFound from "../pages/NotFound";



const routes = [
    {
      path: "/",
      component: Home,
      title: "Home",
      permittedUser: ["orgadmin", "admin", "user"],
    },
    {
        path: "*",
        component: NotFound,
        title: "Not Found",
        permittedUser: ["orgadmin", "admin", "user"],
      },
];
    
export default routes;
    