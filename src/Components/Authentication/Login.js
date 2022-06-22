import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner';

const Login = () => {
    return (
        <>
            <Banner></Banner>
            <div className='my-20'>
                <div class="hero my-h-screen bg-base-100">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left w-25 ml-0 lg:ml-5 lg:w-96">
                            <h1 class="text-5xl font-bold">Log In!</h1>
                            <p class="py-6">To get access and continue browse please sign up here.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        <Link to='/' class="label-text-alt link link-hover">Don't have an account? Click here to signup</Link>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;