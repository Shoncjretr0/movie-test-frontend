import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MovieList from './components/MovieList';
import FavoriteMovies from './components/FavoriteMovies';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />}>
                        <Route index element={<MovieList />} />
                        <Route path="favorites" element={<FavoriteMovies />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;