import {incAction, decAction} from '../redux/actions/counActions'
import {useDispatch,useSelector} from 'react-redux'
const Likes = () => {
const dispatch=useDispatch()
const store= useSelector((store)=>store)
console.log(store)
    return (
        <div className='buttonControls'>
            <button onClick={()=>dispatch(incAction())}>♥{store.count}</button>
           
            <button onClick={()=>dispatch(decAction())}> Dislike</button>
        </div>
    )
}


export default Likes