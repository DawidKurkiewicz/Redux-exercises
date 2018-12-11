import { createStore } from 'redux'

const INITIAL_STATE = {
    firstAction: false
}

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === "FIRST_ACTION") {
        return { firstAction: true }
    }
    return state
}


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.dispatch({
    type: "FIRST_ACTION"
})