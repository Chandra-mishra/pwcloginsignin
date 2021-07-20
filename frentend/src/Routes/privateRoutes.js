import {
    dashboard
  } from "./path";
import Dashboard from '../components/dashboard'
  const PrivateRoutes = [
    {
      path: dashboard,
      component: Dashboard,
    },
  ];
  
  export default PrivateRoutes;