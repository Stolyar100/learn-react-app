import React from 'react';

import './Form.css'

export default function Form() {
    return (
        <form className="form">
            <input className="form__email"/>
            <input className="form__password"/>
            <input className="form__checkbox"/>
            <button className="form_sign-btn">Sign in</button>
            <button className="form_forgot-btn">Forgot your password?</button>
        </form>
    )
}
