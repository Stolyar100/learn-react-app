import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './Form.css';

const FormLayout = ({ values, errors, touched }) => {
    const emailError = <div className="form__error">{errors.email}</div>;
    const passwordError = <div className="form__error">{errors.password}</div>;
    const KeepSignInError = <div className="form__error">{errors.keepSignIn}</div>;
    return (
        <div className="form">
            <Form className="form__block">
                <h3 className="form__title">Sign in to your account</h3>
                {touched.email && errors.email && emailError}
                <Field
                    type="email"
                    name="email"
                    className="form__input form__email"
                    placeholder="email"
                />
                {touched.password && errors.password && passwordError}
                <Field
                    type="password"
                    name="password"
                    className="form__input form__password"
                    placeholder="password"
                />
                {touched.keepSignIn && errors.keepSignIn && KeepSignInError}
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
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required('email is required'),
        password: Yup.string().min(8).required('password is required'),
        keepSignIn: Yup.boolean().oneOf([true], 'checkbox is required'),
    }),
    handleSubmit(values, {resetForm}) {
        const user = values.email.match(/^(.+)@/)[1];
        resetForm();
        alert(`Wellcome ${user}`);
    },
})(FormLayout);
