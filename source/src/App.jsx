import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Protected from './pages/Protected';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import StartPage from './pages/Quiz/Start';
import QuizPage from './pages/Quiz/Quiz';
import ConfirmPage from './pages/Quiz/Confirm';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/Layout' element={<Layout />} >
                    <Route index element={<Protected><Dashboard /></Protected>} />
                    <Route path='dashboard' element={<Protected><Dashboard /></Protected>}/>
                    <Route path='Start' element={<Protected><StartPage /></Protected>} />
                    <Route path='Quiz' element={<Protected><QuizPage /></Protected>} />
                    <Route path='Confirm' element={<Protected><ConfirmPage /></Protected>} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
