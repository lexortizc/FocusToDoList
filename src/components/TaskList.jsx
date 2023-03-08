import Task from "./Task"
import useTaskStore from './../hooks/useTaskStore';

export default ({ title, isCompleted = false }) => {
  const { taskItems } = useTaskStore();
  const tasks = taskItems.filter( task => task.isCompleted === isCompleted )

  return (
    <div className="card">
      <h3 className="card-header text-center "> { title } </h3>
      <div className="card-body row g-2">
        { tasks?.map( (task, index) => (
          <Task key={ index } task={ task } />
        ))}
      </div>
    </div>
  )
}