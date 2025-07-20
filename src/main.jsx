import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './i18n/fr.json';
import en from './i18n/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);