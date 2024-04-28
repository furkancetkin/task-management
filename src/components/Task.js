import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { setDetailModal, setFormModal } from "../stores/modal";
import { setSelectedTask } from "../stores/task";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task({ task, index }) {
  const dispatch = useDispatch();

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
            dispatch(setSelectedTask(task));
            dispatch(setDetailModal(true));
          }}
        >
          <div className="content">
            <p className="title">{task.title}</p>
          </div>
          <div className="bottom">
            <div className="badges">
              <span className="badge">#{task.id}</span>
              <span
                className={`badge ${
                  task.type === "bug" ? "bugType" : "taskType"
                }`}
              >
                {task.type}
              </span>
            </div>
            <div className="buttons">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setSelectedTask(task));
                  dispatch(
                    setFormModal({
                      isOpen: true,
                      type: "edit",
                    })
                  );
                }}
              >
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Task;
