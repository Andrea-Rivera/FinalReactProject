import { useState } from "react";
import Checkbox from "../checkbox";
import Button from "../button";
import styles from "./TodoList.module.css";

function ToDoForm() {
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false,
  });

  //create function which takes an event . This function will handle the adding of the tasks to the list of todos.
  const [todos, setTodos] = useState([]);

  //This function will handle the adding of the tasks to the list of todos. This method will be executed when the “Add todo” button is clicked.
  function addTodos(event) {
    //event.preventDefault() to prevent the form from submitting twice.
    event.preventDefault();
    // to add new task we will use the spread operator to append the reamining toDos on top of our list
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false,
      },
    ]);
    // reset the task
    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false,
    });
  }
  const handleToggle = (id) => {
    console.log({ id });
    // sieving through the todos and returning the ones that are completed
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, isCompleted: true }
        : { ...task };
    });
    // setting our new todo list with updated variables
    setTodos(mapped);
  };
  return (
    <div>
      <div className={styles.banner}> </div>
      <div className={styles.main}>
        <form onSubmit={addTodos}>
          <label>
            Task:
            <input
              type="text"
              value={task.taskDescription}
              name="taskDescription"
              onChange={(event) =>
                setTask({
                  taskDescription: event.target.value,
                  isCompleted: false,
                })
              }
            />
          </label>
          <Button className={styles.formbutton}>Add ToDo</Button>
        </form>
        {/*Create some new markup for the todo list so that each task can be displayed  */}

        <div>
          {todos.length > 0 ? (
            <div>
              {todos.map((todoItem, index) => {
                return (
                  <div
                    id={todoItem.id}
                    key={index + todoItem.id}
                    value={todoItem.id}
                  >
                    {todoItem.isCompleted ? (
                      //if it is completed it will strike out the task
                      <strike>
                        <p>{todoItem.taskDescription}</p>
                      </strike>
                    ) : (
                      //Otherwise, it will display the task to do.
                      <Checkbox
                        label={todoItem.taskDescription}
                        value={todoItem.id}
                        checked={todoItem.isCompleted}
                        onChange={(event) => handleToggle(todoItem.id)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            //if there is nothing in the todos will display the message "No tasks for today"
            <h3>No tasks for today</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoForm;
