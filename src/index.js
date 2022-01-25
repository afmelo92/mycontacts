import { App } from 'components';
import { ToastProvider } from 'hooks/useToast';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
