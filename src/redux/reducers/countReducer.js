const initialValue= 0

export default function countReducer(state=initialValue, action){
    switch(action.type){
        case 'inc':{
            return state+1
        }
        default: return state
    }
}