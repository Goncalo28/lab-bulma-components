import React from 'react'
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar is-transparent " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="90" height="28"/>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Home
                        </a>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                {/* <a className="button is-info" href="#">
                                    <span>Login</span>
                                </a>
                            </p>
                            <p className="control">
                                <a className="button is-primary" href="#">
                                    <span>Sign up</span>
                                </a> */}
                                <CoolButton />
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
