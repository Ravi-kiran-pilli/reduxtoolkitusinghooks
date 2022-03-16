import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodoAsync = createAsyncThunk(
    'todos/getTodoAsync',
    async () => {
        const response = await fetch('https://retoolapi.dev/SSTkVy/todo');
        if (response.ok) {
            var todos = await response.json();
            console.log(todos)
            return { todos };
        }
    }
);
export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
        const response = await fetch("https://retoolapi.dev/SSTkVy/todo", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ id: Date.now, fullName: payload.title, completed: true })
        });
        if (response.ok) {
            const todo = await response.json();
            console.log(todo)
            return { todo }
        }
    }
)
export const toggleCompleteAsync = createAsyncThunk(
    'todos/toggleCompleteAsync',
    async (payload) => {
        const response = await fetch(`https://retoolapi.dev/SSTkVy/todo/${payload.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ completed: payload.completed })
        });
        if (response.ok) {
            const todo = await response.json();
            return { id: todo.id, completed: todo.completed }
        }
    }
)
export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (payload) => {
        const response = await fetch(`https://retoolapi.dev/SSTkVy/todo/${payload.id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ id: payload.id })
        });
        if (response.ok) {
            const todo = await response.json();
            return { todo }
        }
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        count: 0
    },
    reducers: {
        incrementCount: (state) => {
            state.count += 1
        },
        decrementCount: (state, action) => {
            state.count -= 1
        }
        // addTodo: (state, action) => {
        //     const newToDo = {
        //         id: Date.now(),
        //         title: action.payload.title,
        //         completed: false
        //     }
        //     state.push(newToDo);
        // },
        // toggleComplete: (state, action) => {
        //     const index = state.findIndex(
        //         (todo) => todo.id === action.payload.id
        //     );
        //     state[index].completed = action.payload.completed;
        // },
        // deleteTodo: (state, action) => {
        //     const index = state.findIndex(
        //         (todo) => todo.id === action.payload.id
        //     );
        //     state.splice(index, 1)
        // },

    }, extraReducers: {
        [getTodoAsync.pending]: (state, action) => {
            console.log("fetching data...!")
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            console.log("fetching data successful...!")
            // state.getTodoValues = action.payload.todos
            console.log(action.payload)
            return action.payload;
        },
        [addTodoAsync.pending]: (state, action) => {
            console.log("adding data...!")
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            console.log("added data successful...!")
            // console.log(action.payload.todo)
            state.todos.push(action.payload.todo);
        },
        [toggleCompleteAsync.pending]: (state, action) => {
            console.log("updating data...!")
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            console.log("updated data successful...!", state, action.payload)

            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state.todos[index].completed = action.payload.completed;
        },
        [deleteTodoAsync.pending]: (state, action) => {
            console.log("Deleting data...!")
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            console.log("Deelte data successful...!")
            // const index = state.todos.findIndex(
            //     (todo) => todo.id === action.payload.id
            // );

            state.todos = [...state.todos.filter(arrayItem => arrayItem.id !== action.payload.id)];
            console.log(state.todos)
            // state.todos.remove(action.payload.id)

            // state.todos.splice(index, 1)

            // state.todos = state.todos.filter((todo) => { return todo.id !== action.payload.id })
            // state.todos.shift(action.payload.id)
        }
    }
});
// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export const { incrementCount, decrementCount } = todoSlice.actions;

export default todoSlice.reducer;