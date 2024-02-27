import React from "react";

function Status({ taskList }) {
  const calculatestatus = (status) => {
    return taskList.filter((task) => task.status === status).length;
  };
  return (
    <div className="status">
      <h3>status</h3>
      <div className="content">
        <div>to do: {calculatestatus("todo") ?? 0}</div>
        <div className="splitLine"></div>
        <div>in progress: {calculatestatus("inProgress") ?? 0}</div>
        <div className="splitLine"></div>
        <div>done: {calculatestatus("done") ?? 0}</div>
        <div className="splitLine"></div>
        <div>rejected: {calculatestatus("rejected") ?? 0} </div>
      </div>
    </div>
  );
}
export default Status;
