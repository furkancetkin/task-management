import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

function Board({ taskList, setTaskList, setFormModal, setDetailModal, setSelectedTask }) {
  const handleDradEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const updatedTaskList = [...taskList];
    const draggedTask = updatedTaskList.find((task) => task.id === draggableId);

    draggedTask.status = destination.droppableId;
    setTaskList(updatedTaskList);
  };

  return (
    <DragDropContext onDragEnd={handleDradEnd}>
      <div className="board">
        <Column
          columnTitle="to do"
          taskList={taskList.filter((t) => t.status === "todo")}
          id="todo"
          setFormModal={setFormModal}
          setDetailModal={setDetailModal}
          setSelectedTask={setSelectedTask}
          setTaskList={setTaskList}
          />
        <Column
          columnTitle="in progress"
          taskList={taskList.filter((t) => t.status === "inProgress")}
          id="inProgress"
          setFormModal={setFormModal}
          setDetailModal={setDetailModal}
          setSelectedTask={setSelectedTask}
          setTaskList={setTaskList}
          />
        <Column
          columnTitle="done"
          taskList={taskList.filter((t) => t.status === "done")}
          id="done"
          setFormModal={setFormModal}
          setDetailModal={setDetailModal}
          setSelectedTask={setSelectedTask}
          setTaskList={setTaskList}
          />
        <Column
          columnTitle="rejected"
          taskList={taskList.filter((t) => t.status === "rejected")}
          id="rejected"
          setFormModal={setFormModal}
          setDetailModal={setDetailModal}
          setSelectedTask={setSelectedTask}
          setTaskList={setTaskList}
        />
      </div>
    </DragDropContext>
  );
}

export default Board;
