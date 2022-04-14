import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppRouter from '@/router';
import { Provider } from 'react-redux';
import store from '@/store/index';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AppRouter />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
