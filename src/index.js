import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devicon/devicon.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'fr';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
serviceWorker.register();
