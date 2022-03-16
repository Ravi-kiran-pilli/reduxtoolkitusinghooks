import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync, selectTodos } from '../store/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch();

    // const todos = useSelector((state) => state.todos.todos);
    const todos = useSelector(selectTodos)

    useEffect(() => {
        dispatch(getTodoAsync());
    }, [dispatch]);

    return (
        <ul className='list-group'>
            {todos && todos.map((todo) => (
                // console.log(todo)
                <TodoItem id={todo.id} title={todo.fullName} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default TodoList;