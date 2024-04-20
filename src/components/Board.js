import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useDispatch } from "react-redux";
import { changeStatus } from "../stores/task";

function Board() {
  const dispatch = useDispatch();
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

    dispatch(
      changeStatus({
        id: draggableId,
        status: destination.droppableId,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDradEnd}>
      <div className="board">
        <Column columnTitle="to do" id="todo" />
        <Column columnTitle="in progress" id="inProgress" />
        <Column columnTitle="done" id="done" />
        <Column columnTitle="rejected" id="rejected" />
      </div>
    </DragDropContext>
  );
}

export default Board;
