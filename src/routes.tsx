import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import RecipePage from './pages/RecipePage';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const token = localStorage.getItem('token');

    return token ? element : <Navigate to="/" replace />;
};

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />

            <Route element={<ProtectedRoute element={<Outlet />} />}>
                <Route
                    path="/dashboard"
                    element={<DashboardPage token={localStorage.getItem('token')!} />}
                />
                <Route
                    path="/recipe"
                    element={<RecipePage token={localStorage.getItem('token')!} />}
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;