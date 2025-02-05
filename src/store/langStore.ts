import { createSignal } from 'solid-js';
import type { Language } from '../i18n';

const LANG_STORAGE_KEY = 'app-language';

// Utility to detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'ru' ? 'ru' : 'en';
};

// Get initial language from localStorage or detect from browser
const getInitialLanguage = (): Language => {
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY) as Language;
  return savedLang || detectBrowserLanguage();
};

// Create the store
const [lang, setLang] = createSignal<Language>(getInitialLanguage());

// Wrapper for setLang that also updates localStorage
const setLanguage = (newLang: Language) => {
  localStorage.setItem(LANG_STORAGE_KEY, newLang);
  setLang(newLang);
};

export { lang, setLanguage }; 