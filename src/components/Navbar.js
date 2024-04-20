import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormModal } from "../stores/modal";
import { setDarkMode } from "../stores/theme";
import { setSelectedTask } from "../stores/task";

function Navbar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(
      setSelectedTask({
        title: "",
        description: "",
        status: "todo",
        type: "task",
      })
    );
    dispatch(setFormModal({ isOpen: true, type: "create" }));
  };

  return (
    <div className={`navbar ${darkMode ? "darkMode" : ""}`}>
      <button onClick={openModal}>create</button>
      <div>
        {darkMode ? (
          <button onClick={() => dispatch(setDarkMode(false))}>
            <i className="fa-solid fa-sun"></i>
          </button>
        ) : (
          <button onClick={() => dispatch(setDarkMode(true))}>
            <i className="fa-solid fa-moon"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
