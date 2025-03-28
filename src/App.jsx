import React from 'react';
import AddTodo from './App/Components/AddTodo';
import Todos from './App/Components/Todos';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">To-Do App</h1>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
