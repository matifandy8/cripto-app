import {  Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Profile from "../pages/profile";
import PrivateRoute from "./PrivateRoute";





export const Public: React.FC = () => {
    return(
      <Layout>       
         <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute  path="/profile"  component={Profile}  exact  />

        {/* <Route exact path="/fiats" component={Fiats} /> */}
        <Redirect to="/" />
      </Switch>
      </Layout>
    )
}