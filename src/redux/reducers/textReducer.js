const initialValue= ''

export default function textReducer(state=initialValue, action){
    switch(action.type){
        case 'add':{
            return action.payload
        }
        default: return state
    }
}