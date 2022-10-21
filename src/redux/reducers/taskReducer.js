const initialValue = []

export default function textReducer(state = initialValue, action) {
    switch (action.type) {
        case 'new': {
            return [...state, action.payload]
        }
        default: return state
    }
}