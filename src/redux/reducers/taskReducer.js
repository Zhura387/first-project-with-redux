const initialValue = []

export default function textReducer(state = initialValue, action) {
    switch (action.type) {
        case 'new': {
            return [...state, action.payload]
        }
        case 'del': {
            return [...state.filter((item) => item.text !== action.payload)]
        }
        default: return state
    }
}