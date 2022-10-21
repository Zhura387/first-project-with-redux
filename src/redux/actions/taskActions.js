const addTask = (obj) => ({
    type: 'new',
    payload: obj,
})

export { addTask }