import useTaskStore from './../hooks/useTaskStore';

export default ({ task }) => {
  const removeTask = useTaskStore((state) => state.removeTask)
  const updateTask = useTaskStore((state) => state.updateTask)
  const { title, description, owner, date, isCompleted } = task

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ description }</p>
        <p className="card-text">
          <small className="text-muted"> { owner } | { date } </small>
        </p>
        <div className="row gx-3">
          {
            ( !isCompleted ) &&
            <button
              className="col mx-2 btn btn-outline-success"
              onClick={ () => { updateTask(task) } }
            >
              Done
            </button>
          }
          <button
            className="col mx-2 btn btn-outline-danger"
            onClick={ () => { removeTask(title) } }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}