import { addText } from '../redux/actions/textActions'
import { addTask } from '../redux/actions/taskActions'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';

const Task = () => {
    const dispatch = useDispatch()
    const store = useSelector((store) => store)

    const obj = {
        text: store.text,
    }

    return (
        <div className='buttonControls'>
            <input type='text'
                onChange={(e) => dispatch(addText(e.target.value))}
                value={store.text}></input>
            <button onClick={() => dispatch(addTask(obj))}></button>
            <div className='taskPlace'>
                {store.task.map((item) =>
                    <p> {item.text}</p>
                )}
            </div>
        </div>
    )
}

export default Task