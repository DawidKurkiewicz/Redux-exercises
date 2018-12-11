import { combineReducers, createStore } from 'redux'

const FIRST_ACTION = "FIRST_ACTION"
const INC = "INC"
const DEC = "DEC"

const INITIAL_STATE = {
    firstAction: false
}

const INITIAL_STATE2 = {
    counter: 0
}

const firstAction = () => ({
    type: FIRST_ACTION
})
const firstActionReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "FIRST_ACTION") {
        return {
            ...state,
            firstAction: true
        }
    }
    return state
}

const inc = (value = 1) => ({
    type: INC,
    value
})
const dec = (value = 1) => ({
    type: DEC,
    value
})

const counterReducer = (state = INITIAL_STATE2, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case DEC:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state
    }
}

const bothReducers = combineReducers({
    firstActionReducerName: firstActionReducer,
    counterReducerName: counterReducer
})



export const store = createStore(
    bothReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.dispatch({
    type: "FIRST_ACTION"
})

window.dispatchFirstAction = () => store.dispatch(firstAction())
window.dispatchIncAction = () => store.dispatch(inc())
window.dispatchDecAction = () => store.dispatch(dec())



window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
