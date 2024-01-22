// import React from 'react';
import {  Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/LanguageSelector';


function App() {
  const { t } = useTranslation();
 const {line1, line2} = t('description',{channel:'kehindes`'})
 

  return (
    <div className='container'>
    
    <LanguageSelector/>
    <h1>{t('hi')}</h1>
    <span> 
    <Trans 
    i18nkey={'line1'}
    values={{channel:'kehinde'}}
     />
     </span>
    
    
    <p>{line1}</p>
    <span>{line2}</span>
    
    
    </div>
  )
}

export default App
