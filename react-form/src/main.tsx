import ReactDOM from 'react-dom/client';
import App from './app/index.tsx';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './app/appStore.ts';
import { Provider } from 'react-redux';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
