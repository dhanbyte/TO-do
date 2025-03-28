import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Components/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div className="flex flex-col space-y-4">
            <form onSubmit={addTodoHandler} className="flex flex-col space-y-4">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your Todo ..."
                    value={input}
                    type="text"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
