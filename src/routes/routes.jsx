import MainContainerEnter from '../components/enter/main-container-enter';
import MainContainerReconcile from '../components/reconcile/main-container-reconcile';
import MainContainerRegtrans from '../components/regtrans/main-container-regtrans';
import MainContainerMileage from '../components/mileage/main-container-mileage';
import MainContainerMap from '../components/map/main-container-map';
import MainContainerFitbit from '../components/fitbit/main-container-fitbit';
import MainContainerUnits from '../components/units/main-container-units';
import MainContainerFood from '../components/food/main-container-food';
import Login from '../components/login';

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Login,
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login,
    },
    {
        path: '/enter',
        exact: true,
        auth: true,
        component: MainContainerEnter,
    },
    {
        path: '/reconcile',
        exact: true,
        auth: true,
        component: MainContainerReconcile,
    },
    {
        path: '/regtrans',
        exact: true,
        auth: true,
        component: MainContainerRegtrans,
    },
    {
        path: '/mileage',
        exact: true,
        auth: true,
        component: MainContainerMileage,
    },
    {
        path: '/map',
        exact: true,
        auth: true,
        component: MainContainerMap,
    },
    {
        path: '/food',
        exact: true,
        auth: true,
        component: MainContainerFood,
    },
    {
        path: '/units',
        exact: true,
        auth: true,
        component: MainContainerUnits,
    },
    {
        path: '/fitbit',
        exact: true,
        auth: true,
        component: MainContainerFitbit,
    },
];

export default routes;
