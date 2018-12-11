const TEXT_CHANGED = 'todo/TEXT_CHANGED'
const ADD = 'todo/ADD'
const SET_FILTER = 'todo/SET_FILTER'

export const textChangedAction = newValue => ({
    type: TEXT_CHANGED,
    newValue
})

export const addAction = () => ({
    type: ADD

})

export const setFilterAction = newFilter => {
    const availableFilters = ['ALL', 'COMPLETED', 'UNCOMPLETED']

    if (!availableFilters.includes(newFilter)) {
        throw new Error('Not supported Filter!')
    }
    return {
        type: SET_FILTER,
        newFilter
    }
}


const INITIAL_STATE = {
    tasks: [],
    newTaskText: '',
    currentFilter: 'ALL'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
            return {
                ...state,
                newTaskText: action.newValue
            }
        case SET_FILTER:
            return {
                ...state,
                currentFilter: action.newFilter
            }
        case ADD:
            return {
                ...state,
                tasks: state.tasks.concat({
                    text: state.newTaskText,
                    isCompleted: false
                }),
                newTaskText: ''
            }
        default:
            return state
    }
}