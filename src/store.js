import { createStore } from 'redux'

const INITIAL_STATE = {
    firstAction: false
}

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === "FIRST_ACTION") {
        return {
            ...state,
            firstAction: true
        }
    }
    return state
}

const FIRST_ACTION = "FIRST_ACTION"


const firstAction = () => ({
type: FIRST_ACTION
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

)

store.dispatch({
    type: "FIRST_ACTION"
})

window.dispatchFirstAction= () => store.dispatch(firstAction())

window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()
window.dispatchFirstAction()