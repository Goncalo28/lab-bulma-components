import React from 'react'
import 'bulma/css/bulma.css';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

const Signup = () => {
    return (
        <div className="container">
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="your password"/>
            <p className="control">
                <CoolButton className="button is-primary" text="Submit"/>      
            </p>
        </div>
    )
}

export default Signup
