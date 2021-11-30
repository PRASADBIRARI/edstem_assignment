import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import configureStore from './store'
import { GlobalProvider } from "./context/GlobalState";
import Preloader from 'components/preloader/Preloader';


const store = configureStore();
export const history = createBrowserHistory();

ReactDOM.render(

  
  <GlobalProvider>
    <BrowserRouter>
      {/* <Preloader/> */}
      <Route path="/" />
      <App />
    </BrowserRouter>
  </GlobalProvider>,

  document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
