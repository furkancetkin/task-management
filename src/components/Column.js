import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { useSelector } from "react-redux";

function Column({ columnTitle, id }) {
  const { tasks } = useSelector((state) => state.task);
  return (
    <div className="column">
      <h3 className="columnTitle">{columnTitle}</h3>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className={`taskList ${
              snapshot.isDraggingOver ? "draggingOver" : ""
            }`}
          >
            {tasks
              .filter((t) => t.status === id)
              .map((task, index) => (
                <Task task={task} key={task.id} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
