import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
    // const todos = useSelector(selectTodos)

    const todos = useSelector((state) =>
        // console.log(state.todos)
        state.todos.todos.length > 0 ? state.todos.todos.filter((todo) => todo.completed === true) : []
    );

    return <h4 className='mt-3'>Total complete items: {todos.length}</h4>;
};

export default TotalCompleteItems;