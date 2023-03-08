import NewTask from './components/NewTask';
import TaskList from './components/TaskList';

export default () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <NewTask />
        </div>
        <div className="col">
          <TaskList title="To Do" />
        </div>
        <div className="col">
          <TaskList title="Completed" isCompleted={ true } />
        </div>
      </div>
    </div>
  )
}