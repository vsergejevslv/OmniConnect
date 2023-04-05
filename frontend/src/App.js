import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IntegrationManagement from './components/IntegrationManagement';
import DataMapping from './components/DataMapping';
import Collaboration from './components/Collaboration';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<IntegrationManagement />} />
                    <Route path="/data-mapping" element={<DataMapping />} />
                    <Route path="/collaboration" element={<Collaboration />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
