export const TaskCard = ({ task }) => {
  return (
    <div className="px-3 py-2 shadow-lg bg-white rounded-md  h-auto flex my-2">
      <div className="w-11/12">{task.title}</div>
      <div className="w-auto text-red-300 hover:text-red-500 cursor-pointer">
        delete
      </div>
    </div>
  );
};
