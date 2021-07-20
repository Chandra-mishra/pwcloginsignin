import {
    signIn,
    signUp
  } from "./path";
import SignIn from '../components/login.component'
import SignUp from '../components/signup.component'
  const PrivateRoutes = [
    {
      path: signIn,
      component: SignIn,
    },
    {
        path:signUp,
        component: SignUp,
    }
  ];
  
  export default PrivateRoutes;