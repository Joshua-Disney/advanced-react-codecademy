import ReactDOM from 'react-dom';
import React from 'react';
import { ContactsApp } from './ContactsApp.js'
import { ThemeArea } from './ThemeContext'

ReactDOM.render(
  <ThemeArea initialTheme='light'>
    <ContactsApp />
  </ThemeArea>,
  document.getElementById('root')
);