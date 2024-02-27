import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column({ columnTitle, taskList, id, setFormModal, setDetailModal, setSelectedTask, setTaskList }) {
  return (
    <div className="column">
      <h3 className="columnTitle">{columnTitle}</h3>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className={`taskList ${snapshot.isDraggingOver ? 'draggingOver' : ''}`}
          >
            {taskList.map((task, index) => (
                <Task task={task} key={task.id} index={index} setFormModal={setFormModal} setDetailModal={setDetailModal} setSelectedTask={setSelectedTask} setTaskList={setTaskList} taskList={taskList} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
