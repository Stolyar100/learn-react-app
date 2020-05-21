import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

import './Form.css';

const FormLayout = ({ values }) => {
    return (
        <div className="form">
            <Form className="form__block">
                <h3 className="form__title">Sign in to your account</h3>
                <Field
                    type="email"
                    name="email"
                    className="form__input form__email"
                    placeholder="email"
                />
                <Field
                    type="password"
                    name="password"
                    className="form__input form__password"
                    placeholder="password"
                />
                <label className="form__checkbox-block">
                    <Field
                        type="checkbox"
                        name="keepSignIn"
                        className="form__checkbox"
                    />
                    <p className="form__description">Keep me signed in</p>
                </label>
                <button className="form_sign-btn">Sign in</button>
                <button className="form__description form_forgot-btn">
                    Forgot your password?
                </button>
            </Form>
        </div>
    );
};

export const SignInForm = withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: '',
            keepSignIn: false,
        };
    },
    handleSubmit(values) {
        console.log(values);
    },
})(FormLayout);
