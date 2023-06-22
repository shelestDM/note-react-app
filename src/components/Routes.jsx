import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DeveloperPage from "./pages/DeveloperPage";
import HistoryPage from "./pages/HistoryPage";

const CustomRoutes = () => {
    const routes = [
        {path: '/', component: <HomePage/>, exact: true},
        {path: '/about', component: <AboutPage/>},
        {path: '/developer', component: <DeveloperPage/>},
        {path: '/changes-history', component: <HistoryPage/>},
      ];
    
    return ( 
        <Switch>
            {routes.map( route =>
                <Route key={route.path} exact={route.exact} path={route.path}>
                    {route.component}
                </Route>
            )}
        </Switch>
     );
}
 
export default CustomRoutes;