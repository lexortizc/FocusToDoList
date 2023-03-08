import { useForm } from "react-hook-form"
import useTaskStore from './../hooks/useTaskStore';

const initialValues = {
  title: "",
  description: "",
  owner: "",
  date: new Date().toISOString().slice(0, -14),
  isCompleted: false
}

export default () => {
  const addTask = useTaskStore((state) => state.addTask)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues
  })

  const onSubmit = (task) => {
    addTask(task)
    reset(initialValues)
  }

  return (
    <div className="card">
      <h3 className="card-header text-center "> Add Task </h3>
      <div className="card-body">
        <form onSubmit={ handleSubmit(onSubmit) } className="row g-3 px-3">
          <input type="text" className="form-control" placeholder="Title" { ...register('title') } />
          <input type="text" className="form-control" placeholder="Description" { ...register('description') } />
          <input type="text" className="form-control" placeholder="Owner" { ...register('owner') } />
          <input type="date" className="form-control" { ...register('date') } />
          <button type="submit" className="btn btn-outline-dark">Save</button>
        </form>
      </div>
    </div>
  )
}