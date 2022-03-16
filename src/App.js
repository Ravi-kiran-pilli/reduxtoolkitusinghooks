import React from 'react';
// import Counter from './components/Counter';
// import Counter1 from './components/Counter1/Counter1';

import { useSelector } from 'react-redux'
import AddTodoForm from './Todo/AddTodoForm';
import TodoItem from './Todo/TodoItem';
import TodoList from './Todo/TodoList';
import TotalCompleteItems from './Todo/TodoCompleted';
import { CounterItem } from './Todo/CounterItem';
// import Counter from './components/Counter';

function App() {
  // const counter = useSelector(state => state.number)
  // const details = useSelector(state => state.details)
  // console.log(counter);
  // console.log(details)
  return (
    <div className="App">
      {/* <Counter />
      <Counter1 />
      <ObjectViewing /> */}
      <div>
        <AddTodoForm />
        <TodoItem />
        <TodoList />
        <TotalCompleteItems />

      </div>
      {/* <div>
        <CounterItem />

      </div> */}

    </div>
  );
}

export default App;
