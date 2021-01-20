import todo from '../../types'

export const addTask=task=>({
    type:todo.add_task,
    payload:task
})


export const changeState=(id,state)=>({
    type:todo.update_state,
    payload:{id, state}
})

export const selectTask=(task)=>({
    type:todo.select_task,
    payload:task
})

export const updateTask=task=>({
    type:todo.update_task,
    payload:task
})

export const deleteTask=id=>({
    type:todo.delete_task,
    payload:id
})

export const cleanData=()=>({
    type:todo.clean_data
})

export const setCordinate=cordinate=>({
    type:todo.set_cordinate,
    payload:cordinate
})