import React from "react";

function DetailModal({ detailModal, setDetailModal, task, taskList, setTaskList }) {
  const deleteTask = (e) => {
    e.stopPropagation();
    const updatedTaskList = taskList.filter(t => t.id !== task.id);
    setTaskList(updatedTaskList);
    setDetailModal(false);
  }
  return (
    <>
      {detailModal && (
        <div className="modal" onClick={() => setDetailModal(false)}>
          <div className="modalInner" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h3>task detail</h3>
              <button onClick={() => setDetailModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modalContent">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="bottom">
              <div className="badges">
                <span className="badge">#{task.id}</span>
                <span className="badge">{task.status}</span>
                <span
                  className={`badge ${
                    task.type === "bug" ? "bugType" : "taskType"
                  }`}
                >
                  {task.type}
                </span>
              </div>
                <button className="deleteButton" onClick={(e) => deleteTask(e)}>
                <i className="fa-solid fa-trash-can" />
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailModal;
