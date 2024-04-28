import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetailModal } from "../../stores/modal";
import { deleteTask } from "../../stores/task";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

function DetailModal() {
  const { detailModal } = useSelector((state) => state.modal );
  const { selectedTask } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const deleteTaskF = (e) => {
    e.stopPropagation();
    dispatch(deleteTask(selectedTask.id));
    dispatch(setDetailModal(false));
  };
  return (
    <>
      {detailModal && (
        <div className="modal" onClick={() => dispatch(setDetailModal(false))}>
          <div className="modalInner" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h3>task detail</h3>
              <button className="iconBtn" onClick={() => dispatch(setDetailModal(false))}>
                <CloseIcon />
              </button>
            </div>
            <div className="modalContent">
              <h3>{selectedTask.title}</h3>
              <p>{selectedTask.description}</p>
              <div className="bottom">
                <div className="badges">
                  <span className="badge">#{selectedTask.id}</span>
                  <span className="badge">{selectedTask.status}</span>
                  <span
                    className={`badge ${
                      selectedTask.type === "bug" ? "bugType" : "taskType"
                    }`}
                  >
                    {selectedTask.type}
                  </span>
                </div>
                <button className="iconBtn deleteButton" onClick={(e) => deleteTaskF(e)}>
                  <DeleteIcon />
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
