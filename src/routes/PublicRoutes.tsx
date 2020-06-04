import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout'
import { Minimal as MinimalLayout } from '../layouts';

const PublicRoutes = () => {
  return (
    <Switch>
        <RouteWithLayout
            component={lazy(() => import("../views/SignIn"))}          
            exact               
            layout={MinimalLayout}
            path="/sign-in"
        />
        <RouteWithLayout
            component={lazy(() => import("../views/SignUp"))}
            exact                
            layout={MinimalLayout}
            path="/sign-up"
        />
        <RouteWithLayout
            component={lazy(() => import("../views/SignIn"))}
            exact
            layout={MinimalLayout}
            path="/"
        />
        <RouteWithLayout
            component={lazy(() => import("../views/NotFound"))}
            exact
            layout={MinimalLayout}
            path="/:id*"
        />        
    </Switch>
  )
};

export default PublicRoutes;
