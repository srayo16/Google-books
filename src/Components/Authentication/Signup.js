import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'
import Loading from '../Loading/Loading';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error4] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [sendEmailVerification, sending1, error3] = useSendEmailVerification(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    if (error || error2 || error3 || error4) {
        errorMessage = <p className='text-red-500 font-semibold text-sm'>{error?.message || error2?.message || error3?.message || error4?.message}</p>
    }
    if (loading || updating || sending1 || loading2) {
        return <Loading></Loading>
    }

    if (user || user2) {
        navigate(from, { replace: true });
        toast.success("Signup successful")
    }
    const signupSubmit = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();
        toast.success('Email sent');
    }

    return (
        <div className='my-20'>
            <div class="hero my-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left w-25 ml-0 lg:ml-5 lg:w-96">
                        <h1 class="text-5xl font-bold">SignUp now!</h1>
                        <p class="py-6">To get access and continue browse please sign up here.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={signupSubmit}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                                    <label class="label">
                                        <p className='label-text-alt'>Already have an account? <Link to='/login' class="label-text-alt link text-neutral link-hover font-semibold">Click here to Login</Link></p>
                                    </label>
                                </div>
                                {errorMessage}
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn">Sign Up</button>
                                </div>
                            </form>
                            <div class="form-control mt-2">
                                <button type='submit' onClick={() => signInWithGoogle()} class="btn btn-outline">Continue with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;