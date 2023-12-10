import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
  };

  const saveEditedTask = (index, editedTask) => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(-1);
    }
  };

  return (
    <div>
      <textarea
        id="task"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Type a task..."
      />
      <button id="btn" onClick={addTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li className="list" key={`task${index}`}>
            {editIndex === index ? (
              <>
                <textarea
                  className="editTask"
                  value={task}
                  onChange={(e) => {
                    const editedTask = e.target.value;
                    saveEditedTask(index, editedTask);
                  }}
                  placeholder="Edit task..."
                />
                <button
                  className="saveTask"
                  disabled={!task.trim()}
                  onClick={() => saveEditedTask(index, task)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <button className="edit" onClick={() => editTask(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
