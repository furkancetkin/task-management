import React from "react";

function Navbar({ darkMode, setDarkMode, setFormModal, setSelectedTask }) {
  const openModal = () => {
    setSelectedTask({
      title: "",
      description: "",
      status: "todo",
      type: "task",
    });
    setFormModal({ isOpen: true, type: "create" });
  };

  return (
    <div className={`navbar ${darkMode ? "darkMode" : ""}`}>
      <button onClick={openModal}>create</button>
      <div>
        {darkMode ? (
          <button onClick={() => setDarkMode(false)}>
            <i className="fa-solid fa-sun"></i>
          </button>
        ) : (
          <button onClick={() => setDarkMode(true)}>
            <i className="fa-solid fa-moon"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
