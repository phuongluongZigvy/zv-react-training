export const GetTodos = (todos)=>{
    return {
        type: 'GET_TODOS',
        payload: todos,
    }
}

export const AddNewTodo = (todo)=>{
    return {
        type: 'ADD_NEW_TODO',
        payload: todo,
    }
}

export const SetCompletedTodo = (todo)=>{
    return {
        type: 'SET_COMPLETED_TODO',
        payload: todo,
    }
}

export const DeleteTodo = (todo)=>{
    return {
        type: 'DELETE_TODO',
        payload: todo,
    }
}

export const EditTodo = (todo)=>{
    return {
        type: 'EDIT_TODO',
        payload: todo,
    }
}

export const OpenFormEdit = (todo)=>{
    return {
        type: 'OPEN_FORM_EDIT',
        payload: todo,
    }
}

export const CloseFormEdit = ()=>{
    return {
        type: 'CLOSE_FORM_EDIT',
    }
}

export const FilterCompleted = ()=>{
    return {
        type: 'FILTER_COMPLETED',
    }
}

export const FilterUnCompleted = ()=>{
    return {
        type: 'FILTER_UNCOMPLETED',
    }
}

export const FilterAll = ()=>{
    return {
        type: 'FILTER_ALL',
    }
}