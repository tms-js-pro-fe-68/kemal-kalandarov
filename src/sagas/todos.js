import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { pushTodoItems } from '../actions/todos'
import api from '../api'

function* fetchTodos({ search, sort, page, pageSize }) {
  const response = yield call(() =>
    api.get(`/todos`, {
      params: {
        search,
        sortField: 'description',
        sortOrder: sort,
        offset: (page - 1) * pageSize,
        limit: pageSize,
      },
    }),
  )
  yield put(pushTodoItems(response.data))
}

export default function* todosSaga() {
  yield takeLatest('FETCH_TODOS', fetchTodos)
}
