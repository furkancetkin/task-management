import { Draggable } from "react-beautiful-dnd";

function Task({ task, index, setSelectedTask, setFormModal, setDetailModal }) {

  const bgColorChange = (snapshot) => {
    return snapshot.isDragging ? "dragging" : "";
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          className={`task ${bgColorChange(snapshot)}`}
          onClick={() => {
            setSelectedTask(task);
            setDetailModal(true);
          }}
        >
          <div className="content">
            <p className="title">{task.title}</p>
          </div>
          <div className="bottom">
            <div className="badges">
              <span className="badge">#{task.id}</span>
              <span className={`badge ${task.type === "bug" ? "bugType" : "taskType"}`}>
                {task.type}
              </span>
            </div>
            <div className="buttons">
              <button onClick={(e) => {
                e.stopPropagation();
                setSelectedTask(task);
                setFormModal({
                  isOpen: true,
                  type: 'edit'
                });
              }}>
                <i className="fa-solid fa-pencil" />
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Task;
