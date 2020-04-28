import React from 'react';
import { Switch, Router } from 'react-router-dom';
import routes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './Private';
import PublicRoute from './Public';
import { createBrowserHistory } from 'history';
import { getUser } from '../store/actions/auth';

const history = createBrowserHistory();

const Routes = () => {
    const dispatch = useDispatch();
    const authLoading = useSelector((state) => state.auth.loading);

    React.useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    if (authLoading) {
        return <div></div>;
    }

    return (
        <Router history={history}>
            <Switch>
                {routes.map((route, index) => {
                    if (route.auth) {
                        return (
                            <PrivateRoute key={`route-${index}`} {...route} />
                        );
                    }
                    return <PublicRoute key={`route-${index}`} {...route} />;
                })}
            </Switch>
        </Router>
    );
};

export default Routes;
