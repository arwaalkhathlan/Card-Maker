import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import Header from '../components/Header';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
                setIsRegistering(false);
            }
        }
    };

    return (
        <>
            {userLoggedIn && <Navigate to={'/Home'} replace={true} />}
            <Header />

            <main className="d-flex align-items-center justify-content-center vh-100">
                <div className="card p-4 shadow-lg border-0" style={{ width: '24rem', backgroundColor: '#fff' }}>
                    <div className="card-body">
                        <h3 className="text-center mb-4 text-dark">
                            تسجيل حساب جديد
                        </h3>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-muted ">الأيميل</label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete='email'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-muted">
                                    كلمة المرور
                                </label>
                                <input
                                    disabled={isRegistering}
                                    type="password"
                                    id="password"
                                    autoComplete='new-password'
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label text-muted"> 
                                    تأكيد كلمة المرور
                                </label>
                                <input
                                    disabled={isRegistering}
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete='off'
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            {errorMessage && (
                                <div className="alert alert-danger text-center">
                                    {errorMessage}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isRegistering}
                                className={`btn btn-primary w-100 ${isRegistering ? 'disabled' : ''}`}
                            >
                                {isRegistering ? 'Signing Up...' : 'تسجيل الحساب الجديد'}
                            </button>
                        </form>
                        <div className="text-center mt-3">
                            <span className="text-muted">
                                عندك حساب؟
                                 </span>
                            <Link to={'/Login'} className="text-decoration-none fw-bold">أضغط هنا</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;
