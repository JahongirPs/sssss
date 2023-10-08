import { createStore } from 'redux'
import rootReduer from '../reducer/combine'

const store = createStore(
	rootReduer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store