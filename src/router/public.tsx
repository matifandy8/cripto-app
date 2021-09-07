import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";





export const Public: React.FC = () => {
    return(
      <Layout>       
         <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/fiats" component={Fiats} /> */}
        <Redirect to="/" />
      </Switch>
      </Layout>
    )
}