import styles from "./App.module.scss";

function App() {
  return (
    <main className={`${styles.readingZone} ${styles.flowContainer}`}>
      <h1>TODO List</h1>
      <form name="addTodo" className={styles.addTodoForm}>
        <h2>Create TODO</h2>
        <div className={styles.formControl}>
          <label htmlFor="todo-description">Description</label>
          <input type="text" id="todo-description" name="description" />
        </div>
        <button className={styles.buttonPrimary}>➕ Add</button>
      </form>
      <ul>
        <li className={styles.todoItem}>
          <input type="checkbox" id="todo1-checkbox" checked />
          <label htmlFor="todo1-checkbox">Create a new project with vite</label>
        </li>
        <li className={styles.todoItem}>
          <input type="checkbox" id="todo2-checkbox" checked />
          <label htmlFor="todo2-checkbox">npm install</label>
        </li>
        <li className={styles.todoItem}>
          <input type="checkbox" id="todo3-checkbox" checked />
          <label htmlFor="todo3-checkbox">npm run dev</label>
        </li>
        <li className={styles.todoItem}>
          <input type="checkbox" id="todo4-checkbox" />
          <label htmlFor="todo4-checkbox">Develop my app</label>
        </li>
      </ul>
      <menu className={styles.filtersMenu}>
        <li>All</li>
        <li><a href="#">Open</a></li>
        <li><a href="#">Done</a></li>
      </menu>
    </main>
  );
}

export default App;
