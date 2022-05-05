import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import count from './reducers/count'
import isInitialized from './reducers/isInitialized'
import sushiList from './reducers/sushiList'
import todos from './reducers/todos'
import todosSaga from './sagas/todos'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ count, isInitialized, sushiList, todos })

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(todosSaga)
