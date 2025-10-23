import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PasswordSection from './components/PasswordSection';
import Header from './components/Header';
import FAQ from './components/FAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <PasswordSection />
    < FAQ />
  </React.StrictMode>
);