import { useEffect, useState } from "react";

function FormModal({
  formModal,
  setFormModal,
  selectedTask,
  taskList,
  setTaskList,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
    type: "task",
  });

  const addTask = () => {
    setTaskList([
      { ...form, id: Math.floor(Math.random() * 1000) },
      ...taskList
    ]);
  };

  const editTask = () => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === selectedTask.id) {
        return { ...task, ...form };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const submit = () => {
    formModal.type === "create" ? addTask() : editTask();
    setFormModal({ ...formModal, isOpen: false });
    setForm({
      title: "",
      description: "",
      status: "todo",
      type: "task",
    });
  };

  useEffect(() => {
    if (formModal.type === "edit") {
      setForm(selectedTask);
    } else if (formModal.type === "create") {
      setForm({
        title: "",
        description: "",
        status: "todo",
        type: "task",
      });
    }
  }, [formModal.type]);

  return (
    <>
      {formModal.isOpen && (
        <div
          className="modal"
          onClick={() => setFormModal({ ...formModal, isOpen: false })}
        >
          <div className="modalInner" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h3>{formModal.type}</h3>
              <button
                onClick={() => setFormModal({ ...formModal, isOpen: false })}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modalContent">
              <div className="inputWrapper">
                <label className="inputLabel">title:</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="inputWrapper">
                <label className="inputLabel">description:</label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="inputWrapper">
                <div className="radioWrapper">
                  <input
                    type="radio"
                    id="task"
                    name="type"
                    value="task"
                    checked={form.type === "task"}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  />
                  <label htmlFor="task">task</label>
                </div>
                <div className="radioWrapper">
                  <input
                    type="radio"
                    id="bug"
                    name="type"
                    value="bug"
                    checked={form.type === "bug"}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  />
                  <label htmlFor="bug">bug</label>
                </div>
              </div>
            </div>
            <button onClick={submit}>confirm</button>
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
