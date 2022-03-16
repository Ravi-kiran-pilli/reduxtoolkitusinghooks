import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync, getTodoAsync } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleCompleteAsync({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodoAsync({ id: id }));

    };

    return (
        title && completed ?
            <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
                <div className='d-flex justify-content-between'>
                    <span className='d-flex align-items-center'>
                        <input
                            type='checkbox'
                            className='mr-3'
                            checked={completed}
                            onClick={handleCheckboxClick}
                        ></input>
                        {title}
                    </span>
                    <button onClick={handleDeleteClick} className='btn btn-danger'>
                        Delete
                    </button>
                </div>
            </li>
            : <div></div>
    );
};

export default TodoItem;