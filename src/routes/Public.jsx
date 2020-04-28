import React from 'react';

import { Route } from 'react-router-dom';

const PublicRoutes = ({ component: Component, title, ...rest }) => {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoutes;
