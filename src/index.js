import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="Phonebook">
          <Provider store={store}>
          <App />
        </Provider>
          </BrowserRouter>
        </PersistGate>
  </React.StrictMode>
);
