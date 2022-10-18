import {incAction} from '../redux/actions/counActions'
import {useDispatch,useSelector} from 'react-redux'
const Likes = () => {
const dispatch=useDispatch()
const store= useSelector((store)=>store)
console.log(store)
    return (
        <div className='buttonControls'>
            <button onClick={()=>dispatch(incAction())}>♥{store.count}</button>
           
            <button> Dislike</button>
        </div>
    )
}


export default Likes