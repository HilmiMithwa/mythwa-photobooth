import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainMenu from '../pages/MainMenu';
import PhotosResult from '../pages/PhotosResult';
import Frame1 from '../pages/border/Frame1';
import SelectingFrame from '../pages/SelectingFrame';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainMenu />} />
            <Route path='/frame1' element={<Frame1 />} />
            <Route path='/photosresult' element={<PhotosResult />} />
            <Route path='/selectingframe' element={<SelectingFrame/>} />
        </Routes>
    )
}