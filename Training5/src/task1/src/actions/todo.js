export const getTodos = (todos) => ({
  type: "GET_TODOS",
  payload: todos,
});

export const addNewTodo = (todo) => ({
  type: "ADD_NEW_TODO",
  payload: todo,
});

export const addNewTodoSuccess = (todo) => ({
  type: "ADD_NEW_TODO_SUCCESS",
  payload: todo,
});

export const setCompletedTodo = (id) => ({
  type: "SET_COMPLETED_TODO",
  payload: id,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const editTodo = (todo) => ({
  type: "EDIT_TODO",
  payload: todo,
});

export const openFormEdit = (id) => ({
  type: "OPEN_FORM_EDIT",
  payload: id,
});

export const closeFormEdit = () => ({
  type: "CLOSE_FORM_EDIT",
});

export const changeFilter =(value)=>({
  type: "CHANGE_FILTER",
  payload: value
})

export const searchTodo = (value) => ({
    type: "SEARCH_TODO",
    payload: value
  });
  