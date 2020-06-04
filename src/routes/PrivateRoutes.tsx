import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout'
import { Main as MainLayout } from '../layouts';

const PrivateRoutes = () => {
  return (
    <Switch>
        <RouteWithLayout
            component={lazy(() => import("../views/Dashboard"))}
            exact
            layout={MainLayout}
            path="/dashboard"
        />
        <RouteWithLayout
            component={lazy(() => import("../views/UserList"))}
            exact
            layout={MainLayout}
            path="/users"
        />
        <RouteWithLayout
            component={lazy(() => import("../views/Account"))}
            exact
            layout={MainLayout}
            path="/account"
        />
        <RouteWithLayout
            component={lazy(() => import("../views/Settings"))}          
            exact
            layout={MainLayout}
            path="/settings"
        />
        <Redirect from='/' to='/dashboard' />
    </Switch>
  )
};

export default PrivateRoutes;
