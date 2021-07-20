import React, { Component } from "react";
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {signupApi} from '../Apiservice/Api'
import history from "../Routes/History";
export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signup: {
            first_name:'',
            last_name:'',
            email:'',
            password:''
            }
        }
        this.schema = Yup.object({
            first_name: Yup.string().required('First Name is a required field'),
            last_name: Yup.string().required('Last Name is a required field'),
            email: Yup.string()
              .required('Email is a required field')
              .email('Invalid email'),
            password: Yup.string().required('Password is a required field'),
        })
    }
    submitSignup = (values) => {
      signupApi(values)
      .then((response) => {
          const res = response.data;
          history.push('/sign_in')
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
                initialValues={this.state.signup}
                enableReinitialize={true}
                onSubmit={this.submitSignup.bind(this)}
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
            <form onSubmit={handleSubmit} >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input
                    id = 'first_name'
                     type="text" 
                     className="form-control" 
                     placeholder="First name"
                     value = {values.first_name}
                     onChange={(e) => {
                        handleChange(e)
                        this.setState({ error: '' })
                      }}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name='first_name'>
                    {(msg) => <div className='err_below'>{msg}</div>}
                   </ErrorMessage>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input
                    id = 'last_name'
                     type="text"
                     className="form-control"
                     placeholder="Last name"
                     value = {values.last_name}
                     onChange={(e) => {
                        handleChange(e)
                        this.setState({ error: '' })
                      }}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name='last_name'>
                     {(msg) => <div className='err_below'>{msg}</div>}
                   </ErrorMessage>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                    id = 'email'
                     type="text"
                     className="form-control"
                     placeholder="Enter email"
                     value = {values.email}
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
                    id = 'password'
                     type="password"
                     className="form-control"
                     placeholder="Enter password"
                     value = {values.password}
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

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
              )}
            </Formik>
        );
    }
}