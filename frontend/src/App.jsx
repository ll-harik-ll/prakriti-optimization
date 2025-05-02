import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import StartPage from "./pages/Quiz/Start";
import QuizPage from "./pages/Quiz/Quiz";
import ConfirmPage from "./pages/Quiz/Confirm";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/Layout" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="dashboard" element={<Dashboard />}/>
                    <Route path='Start' element={<StartPage />} />
                    <Route path='Quiz' element={<QuizPage />} />
                    <Route path='Confirm' element={<ConfirmPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
