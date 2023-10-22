import React from 'react';
import { IoLogoDiscord } from 'react-icons/io5';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './home.css'

function Startedpage() {
    const oauthSignIn = () => {

        const params = {
            client_id: '159570393750-e5u242t7sjb6bobagor2pnk5uldq3kj1.apps.googleusercontent.com',
            redirect_uri: 'http://localhost:3000/dashboard',
            response_type: 'token',
            scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
            include_granted_scopes: 'true',
            state: 'pass-through value',
        };

        const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

        const form = document.createElement('form');
        form.setAttribute('method', 'GET');
        form.setAttribute('action', oauth2Endpoint);

        for (const p in params) {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);
            input.setAttribute('value', params[p]);
            form.appendChild(input);
        }



        document.body.appendChild(form);
        form.submit();
        setTimeout(() => {
            const hash = window.location.hash;
            const token = new URLSearchParams(hash).get('access_token');
            console.log('Access Token:', token);
        }, 5000);

    }


    return (
        <div className="d-flex flex-row">
            <div className="home">
                <h4 className="logo">Logo</h4>
                <div>
                    <h1 className="board">Board.</h1>
                </div>

                <div>
                    <ul className="icons">
                        <li>
                            <a href="https://github.com">
                                <AiFillGithub style={{ color: "white" }} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <AiFillTwitterCircle style={{ color: "white" }} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com">
                                <AiFillLinkedin style={{ color: "white" }} />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com">
                                <IoLogoDiscord style={{ color: "white" }} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="signForm">
                <h1 className="signFormh">Sign In</h1>
                <p className="signFormp">Sign in to your account</p>
                <div className='d-flex'>
                    <div className='google_sign' onClick={oauthSignIn}>
                        <img src="google logo.png" alt="logo" className='google_img' />
                        <p>Sign in with Google</p>
                    </div>
                    <div className='google_sign'>
                        <img src="apple logo.png" alt="logo" className='google_img' />
                        <p>Sign in with apple</p>
                    </div>
                </div>
                <div className="form">
                    <form className="m-5">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control inputField"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control inputField"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="mb-3">
                            <a href="/home">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary button">
                            Sign In
                        </button>
                    </form>
                </div>
                <p className="register m-2">
                    Don't have an account?{' '}
                    <span>
                        <Link to="/">Register here</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Startedpage;
