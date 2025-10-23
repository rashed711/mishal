
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './components/HomePage';

function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}

export default App;
