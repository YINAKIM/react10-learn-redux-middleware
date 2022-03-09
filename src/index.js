import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import { createLogger} from "redux-logger/src";

const reduxLogger = createLogger();
const store = createStore(rootReducer, applyMiddleware(reduxLogger)); // redux-logger 사용한 로그찍 : 매우 깔끔한 콘솔로깅

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

