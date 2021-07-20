import React, { Component } from "react";
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {loginApi} from '../Apiservice/Api'
import history from "../Routes/History";
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: '',
          login: {
            email: '',
            password: '',
          },
          showPassword: false,
          loading: false,
        }
        this.schema = Yup.object({
            email: Yup.string()
              .required('Email is a required field')
              .email('Invalid email'),
            password: Yup.string().required('Password is a required field'),
          })
    }
    submitLogin = (values) =>{
      loginApi(values)
      .then((response) => {
          const res = response.data;
          var dataToStore = JSON.stringify(res.data.token);
          localStorage.setItem('user', dataToStore);
          history.push('/dashboard')
          console.log("Response login: ", res);
      })
      .catch((e) => {
          console.error("Error login: ", e.response.data.message);
      });
    }
    render() {
        return (
            <Formik
                validationSchema={this.schema}
                initialValues={this.state.login}
                enableReinitialize={true}
                onSubmit={this.submitLogin.bind(this)}
            >
            {({
                values,
                errors,
                status,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                }) => (
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                    id="email"
                     type="text" 
                     className="form-control" 
                     placeholder="Enter email" 
                     value={values.email}
                     onChange={(e) => {
                        handleChange(e)
                        this.setState({ error: '' })
                      }}
                      onBlur={handleBlur}
                     />
                    <ErrorMessage name='email'>
                    {(msg) => <div className='err_below'>{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                     id="password"
                     type="password"
                     className="form-control"
                     placeholder="Enter password" 
                     value={values.password}
                     onChange={(e) => {
                        handleChange(e)
                        this.setState({ error: '' })
                      }}
                      onBlur={handleBlur}
                     />
                    <ErrorMessage name='password'>
                    {(msg) => <div className='err_below'>{msg}</div>}
                   </ErrorMessage>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            )}
            </Formik>
        );
    }
}
