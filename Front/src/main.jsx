
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router/Router'
import './style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    
);
