import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Banner from '../Home/Banner';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(auth);
    const email = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || user2) {
        navigate(from, { replace: true });
        toast.success('Log in successful');

    }

    if (loading || loading2 || sending) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || error2 || error3) {
        errorMessage = <p className='text-red-500'><small>{error?.message || error2?.message || error3?.message}</small></p>
    }

    const logSub = async event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
    }

    const forgotPass = async () => {

        const mail = email.current.value;;

        if (mail && !error2) {
            await sendPasswordResetEmail(mail);
            toast.success('Sent email');
        }
        else {
            toast.error('Email field empty!');
        }
    }

    return (
        <>
            <Banner></Banner>
            <div className='mt-20 mb-44'>
                <div class="hero my-h-screen bg-base-100">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left w-25 ml-0 lg:ml-5 lg:w-96">
                            <h1 class="text-5xl font-bold">Log In!</h1>
                            <p class="py-6">To get access and continue browse please sign up here.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <form onSubmit={logSub}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="text" ref={email} name='email' required placeholder="email" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' required class="input input-bordered" />
                                        <label class="label">
                                            <p class="label-text-alt text-neutral font-semibold">Already have an account? <Link to='/' class="label-text-alt link text-neutral link-hover font-semibold">Click here to Signup</Link> </p>
                                        </label>
                                        <label class="label">
                                            <p onClick={() => forgotPass()} class="label-text-alt text-neutral link-hover link font-semibold">Forgot password?</p>
                                        </label>
                                        {errorMessage}
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn">Log In</button>
                                    </div>
                                </form>
                                <div class="divider">OR</div>
                                <div class="form-control mt-2">
                                    <button type='submit' onClick={() => signInWithGoogle()} class="btn btn-outline">Continue with Google</button>
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