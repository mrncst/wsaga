import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';

const AppRouter = () => {
    return (
    <BrowserRouter>
        <div className='container-out-router'>
            <div className='container-main-section'>
                <MainSection />
            </div>
            <div className='container-footer'>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
    )
};

export default AppRouter;