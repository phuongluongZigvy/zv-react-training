const URL ='http://localhost:9000';

export const fetchTodos = () => fetch(`${URL}/todos`).then((response)=> response.json());