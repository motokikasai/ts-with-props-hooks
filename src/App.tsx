import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className='App'>
      <TextField
        text='hello'
        person={{ firstName: '', lastName: '' }}
        handleChange={() => {}}
      />
    </div>
  );
};

export default App;
