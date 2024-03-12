
import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

// const initialState = [];

//
// const init = () => {
//     return JSON.parse(localStorage.getItem('todos')) || [];
// };

export const TodoApp = () => {
    
   const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, pendingTodos} = useTodo();
 
    // const [todos, dispatch] = useReducer( todoReducer, initialState, init);
    //
    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify( todos ));
    // }, [todos]);

    // const handleNewTodo = ( todo ) => {
    //     const action = {
    //         type: '[TODO] Add Todo',
    //         payload: todo
    //     };
    //     dispatch( action );
    // }

    // const handleDeleteTodo = ( id ) => {
    //     const action = {
    //         type: '[TODO] Remove Todo',
    //         payload: id
    //     };
    //     dispatch( action );
    // }

    // const handleToggleTodo = ( id ) => {
    //     dispatch({
    //         type: '[TODO] Toggle Todo',
    //         payload: id
    //     });
    // }


    return (
        <>
            <h1>TodoApp: {todos.length}, <small>Pending: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                   <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
