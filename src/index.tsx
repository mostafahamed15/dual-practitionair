import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import App from './App';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import reportWebVitals from './reportWebVitals';
import arTranslate from '../src/core/locales/ar/translation.json';
import enTranslate from '../src/core/locales/en/translation.json';
import './styles/global.scss';
import { Store } from './store/store';

i18n.use(initReactI18next).init({
  resources: {
    en: arTranslate,
    fr: enTranslate,
  },
  lng: 'ar',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
