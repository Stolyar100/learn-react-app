import React from 'react';

import './Form.css';

export default function Form() {
    return (
        <div className="form">
            <form className="form__block">
                <h3 className="form__title">Sign in to your account</h3>
                <input type="email" className="form__input form__email" />
                <input type="password" className="form__input form__password" />
                <div className="form__checkbox-block">
                    <input className="form__checkbox" type="checkbox" />
                    <p className="form__description">Keep me signed in</p>
                </div>
                <button className="form_sign-btn">Sign in</button>
                <button className="form__description form_forgot-btn">
                    Forgot your password?
                </button>
            </form>
        </div>
    );
}
