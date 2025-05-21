import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Protected from './pages/Protected';
import Layout from './pages/Layout';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Home from './pages/Home/Home';
import StartPage from './pages/Quiz/Start';
import QuizPage from './pages/Quiz/Quiz';
import ConfirmPage from './pages/Quiz/Confirm';
import NotFound from './pages/NotFound';
import ResultPage from './pages/Results/Result';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='Start' element={<Protected><StartPage /></Protected>} />
                    <Route path='Quiz' element={<Protected><QuizPage /></Protected>} />
                    <Route path='Confirm' element={<Protected><ConfirmPage /></Protected>} />
                    <Route path='Last-Result' element={<Protected><ResultPage /></Protected>} />
                </Route>

                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
