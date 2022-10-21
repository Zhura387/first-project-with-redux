const addTask = (obj) => ({
    type: 'new',
    payload: obj,
})
const deleteTask = (text) => ({
    type: 'del',
    payload: text,
})


export { addTask,deleteTask }