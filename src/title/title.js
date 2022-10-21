import { useDispatch, useSelector } from 'react-redux'
import { addTitle } from '../redux/actions/titleActions'
import React from 'react';

const Title = () => {
    const dispatch = useDispatch()
    const store = useSelector((store) => store)
    const [isEdit, setIsEdit] = React.useState(true)




    const toggle = () => {
        if (isEdit) {
            setIsEdit(!isEdit)
        } else {
            setIsEdit(!isEdit)
        }
    }

    return (
        <div className='wrappTitle'>
            {isEdit ?
                <div>
                    <input type='text'
                        onChange={(e) => dispatch(addTitle(e.target.value))}
                        value={store.title}></input>
                </div> :
                <p className='textTitle'>{store.title}</p>
            }

            <button onClick={() => toggle()} className='titleBTN'>{isEdit ? <button className='BtnTitleL'>Добавить</button> : <button className='BtnTitleR'>Изменить</button>}</button>
        </div>
    )
}
export default Title;