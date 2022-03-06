import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import loggerMiddleware from "./lib/loggerMiddleware";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware)); // store생성시 미들웨어 적용

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

