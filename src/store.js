import { combineReducers, createStore } from 'redux'
import counter, {inc, dec } from './state/counter'

const reducer = combineReducers({
    counter: counter
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

)

window.dispatchIncAction = () => store.dispatch(inc())
window.dispatchDecAction = () => store.dispatch(dec())
