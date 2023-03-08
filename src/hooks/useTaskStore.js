import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set) => ({
      taskItems: [],
      addTask: (task) => {
        set((state) => {
            return { taskItems: [...state.taskItems, task] }
          }
        )
      },
      removeTask: (title) => {
        set((state) => ({
          taskItems: state.taskItems.filter((task) => task.title !== title),
        }))
      },
      updateTask: (currentTask) => {
        set((state) => {
          const taskItems = state.taskItems.filter((task) => task.title !== currentTask.title)
          currentTask.isCompleted = true

          return { taskItems: [...taskItems, currentTask] };
        })
      },
    }),
    { name: "task-list" }
  )
);

export default useTaskStore;