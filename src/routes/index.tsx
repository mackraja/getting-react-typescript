import React, { Suspense } from 'react';
import { LinearProgress } from "@material-ui/core";
import { Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routes = (props: { isAuthenticated: boolean }) => {
  const { isAuthenticated } = props;
  return (
    <Suspense fallback={<LinearProgress />}>
      {
        (isAuthenticated)
          ? <Route path="/" name="PrivateRoutes" component={PrivateRoutes}/>
          : <Route path="/" name="PublicRoutes" component={PublicRoutes}/>
      }
    </Suspense>
  );
};

export default Routes;