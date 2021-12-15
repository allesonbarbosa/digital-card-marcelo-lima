import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photos from './pages/Photos';

function MainRoutes(){
    return(
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/fotos" element={<Photos/>}/>
        </Routes>
    )
};

export default MainRoutes;