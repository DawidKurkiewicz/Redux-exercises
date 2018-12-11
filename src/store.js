import { combineReducers, createStore } from 'redux'
import counter, {inc, dec } from './state/counter'
import toDoReducer, { textChangedAction, addAction, setFilterAction} from './state/todo'


const reducer = combineReducers({
    counterReducerName: counter,
    todo: toDoReducer
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

)

window.dispatchIncAction = () => store.dispatch(inc())
window.dispatchDecAction = () => store.dispatch(dec())


window.dispatchTextChangedAction = newValue => store.dispatch(textChangedAction(newValue))
window.dispatchAddAction = () => store.dispatch(addAction())
window.dispatchSetFilterAction = newFilter => store.dispatch(setFilterAction(newFilter))

