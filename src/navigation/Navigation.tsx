import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Question from '../module/question/page/Question';
import Sidebar from '../template/Sidebar';
import '../template/template.scss'

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="wrapperMain">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Question id={1} />} />
                    <Route path="/questiontwo" element={<Question id={2} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation