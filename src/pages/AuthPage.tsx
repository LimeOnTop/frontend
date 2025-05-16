import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLoginSuccess = (token: string) => {
        localStorage.setItem('token', token);
        navigate('/dashboard');
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            {isLogin ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                <RegisterForm onRegisterSuccess={() => setIsLogin(true)} />
            )}
            <button
                onClick={() => setIsLogin(!isLogin)}
                style={{ marginTop: '10px' }}
            >
                {isLogin ? 'Need to register?' : 'Already have an account?'}
            </button>
        </div>
    );
};

export default AuthPage;