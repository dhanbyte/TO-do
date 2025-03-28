import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Components/todoSlice';

export default function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Your Todos</h2>
            {todos.length > 0 ? (
                <ul className="w-full overflow-scroll h-[40vh] space-y-2">
                    {todos.map(todo => (
                        <li key={todo.id} className="flex justify-between items-center bg-gray-200 p-2 rounded-lg">
                            <span className="text-gray-800">{todo.text}</span>
                            <button 
                                onClick={() => dispatch(removeTodo(todo.id))} 
                                className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-all"
                            >
                                
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No todos available. Add one!</p>
            )}
        </div>
    );
}
