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

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(todosSaga)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
  }
}
