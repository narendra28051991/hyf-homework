const SearchTodo = ({ searchTodo }) => {
    
    const handleSearch = (todo) => {
        searchTodo(todo);
    }

    return ( 
        <div className="text-center text-light my-4">
            <h1 className="mb-4">Todo List</h1>
            <form className="search">
                <input onKeyDown={ handleSearch } className="form-control m-auto" type="text" name="search" placeholder="search todos" />
            </form>
        </div>
     );
}
 
export default SearchTodo;