import { createStore,applyMiddleware } from 'redux'; 
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from '../reducers/index';
import { rootSaga } from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware,logger];

export const store = createStore(reducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;

// let store;

// export function configureStore(){
//     store = createStore(reducer,applyMiddleware(thunk,logger));
//     return store;
// }

