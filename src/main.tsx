import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { DEFAULT_CONSTANT as initialState } from './const';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App firstMessageData={initialState.firstMessageData} />
  </React.StrictMode>
);
