import { useState } from 'react';
import { TaskCard } from './components/TaskCard';
import { useGetTasks } from './hooks/database/useGetTasks';
import { FormModal } from './components/FormModal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const { tasks, refetchEffect } = useGetTasks();

  return (
    <div className="h-screen w-screen bg-gray-300">
      <div className="flex w-full items-center justify-center h-full">
        <div className="w-1/3 flex justify-center">
          <div className="w-full">
            <div className="text-center">My tasks</div>
            <div className="my-3 w-full max-h-60 overflow-y-auto">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
            <div
              className="text-center my-3 text-blue-500 font-bold cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              new task
            </div>
          </div>
        </div>
        {showModal && (
          <FormModal
            setShowModal={setShowModal}
            refetchEffect={refetchEffect}
          />
        )}
      </div>
    </div>
  );
}

export default App;
