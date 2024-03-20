import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Tests on <TodoItem />', () => { 
    
    const todo = {
        id: 1,
        description: 'Learn React',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should show the pending todo', () => {
            render( <TodoItem 
                        todo={todo} 
                        onToggleTodo={onToggleTodoMock} 
                        onDeleteTodo={onDeleteTodoMock} />
                    );

            const liElement = screen.getByRole('listitem');
            expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

            const spanElement = screen.getByLabelText('span');
            expect(spanElement.className).toContain('align-self-center');
            expect(spanElement.className).not.toContain('text-decoration-line-through');

    });

    test('should show a completed Todo', () => {
        todo.done = true;

            render( <TodoItem 
                        todo={todo} 
                        onToggleTodo={onToggleTodoMock} 
                        onDeleteTodo={onDeleteTodoMock} />
                    );

            const spanElement = screen.getByLabelText('span');
            expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('should call the ToggleTodo when the span is clicked', () => {
            render( <TodoItem 
                        todo={todo} 
                        onToggleTodo={onToggleTodoMock} 
                        onDeleteTodo={onDeleteTodoMock} />
                    );

            const spanElement = screen.getByLabelText('span');
            fireEvent.click(spanElement);
            expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('should call the delete todo on remove button clicked', () => {
            render( <TodoItem 
                        todo={todo} 
                        onToggleTodo={onToggleTodoMock} 
                        onDeleteTodo={onDeleteTodoMock} />
                    );

            const deleteBtn = screen.getByRole('button', { name: 'Delete' });
            
            fireEvent.click(deleteBtn);
            expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
 })