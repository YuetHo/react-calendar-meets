import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // turned off strict mode because it called useEffect Twice in VideoCall.js, causing there to be an incorrect amount of users added
  <App />
);
