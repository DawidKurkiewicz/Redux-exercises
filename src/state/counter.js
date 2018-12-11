
const INC = "INC"
const DEC = "DEC"

export const inc = (value = 1) => ({
    type: INC,
    value
})
export const dec = (value = 1) => ({
    type: DEC,
    value
})

const INITIAL_STATE = {
    counter: 0
}

export default (state = INITIAL_STATE, action) => {
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
