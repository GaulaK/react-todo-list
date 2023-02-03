const Add = ({ handleSubmit, newTask, handleNewTask }) => {
  /*
   * Component : Add.js
   *
   * Return : Field to send new task.
   * User can type the new task in input bar and send it with the button
   *
   * Contains a form with 2 input:
   * - 1 is type text, to write data
   * - 1 is type submit, to send written data
   *
   */
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-task-input"
        type="text"
        name="newTask"
        id="newTask"
        value={newTask}
        autoComplete="off"
        placeholder="new task"
        onChange={handleNewTask}
      ></input>
      <input className="submit-button" type="submit" value={"Add Task"} />
    </form>
  );
};

export default Add;
