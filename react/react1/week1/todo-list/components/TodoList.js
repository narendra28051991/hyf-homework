const TodoList = ({ todos, deleteTodo }) => {

    const handleDelete = (todo) => {
        deleteTodo(todo)
    }
    
    return ( 
        <ul className="list-group todos mx-auto">
            {
              todos.map((todo) => (
                <li key={todo} className="list-group-item d-flex justify-content-between align-items-center text-light">
                  <span>{todo}</span>
                  <i onClick={ handleDelete } className="bi bi-trash"></i>
                </li>
              ))
            }
        </ul>

     );
}
 
export default TodoList;