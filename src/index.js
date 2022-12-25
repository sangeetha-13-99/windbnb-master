import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModalContextProvider} from "./utils/modal-context";
import { InputContextProvider } from './utils/input-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <InputContextProvider>
        <App />
      </InputContextProvider>
    </ModalContextProvider>
    </React.StrictMode>
);