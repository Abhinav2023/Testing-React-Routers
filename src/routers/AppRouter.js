import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
import home from "../components/Home";
import portfolio from "../components/Portfolio";
import contact from "../components/Contact";
import portfolioItem from "../components/PortfolioItem";
import NotFoundPage from "../components/404Router";
import Header from "../components/Header";

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={home} exact={true} />
                <Route path="/portfolio" component={portfolio} exact={true}/>
                <Route path="/contact" component={contact} />
                <Route path="/portfolio/:id" component={portfolioItem} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
