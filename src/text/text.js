import { addText } from '../redux/actions/textActions'
import { addTask, deleteTask } from '../redux/actions/taskActions'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';

const Text = () => {
    const dispatch = useDispatch()
    const store = useSelector((store) => store)

    const obj = {
        text: store.text,
    }

    return (
        <div className='buttonControls'>
            <input type='input'
                onChange={(e) => dispatch(addText(e.target.value))}
                value={store.text}></input>
            <button onClick={() => dispatch(addTask(obj))}></button>
            <div className='taskPlace'>
                {store.task.map((item, index) =>
                    <div className='task' key={index}>
                        <p> {item.text}</p>
                        <button className='deleteBtn' onClick={() => dispatch(deleteTask(item.text))} ><img src='./2.png' alt='crest' /></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Text