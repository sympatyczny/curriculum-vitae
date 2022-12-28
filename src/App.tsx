import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {

  const language = useSelector((state: any) => state.settings.language.language);

  return (
    <>
      <div className='App'>
      </div>
      {console.log('language: ', language)}
    </>
  );
};

export default App;
