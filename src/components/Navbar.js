import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormModal } from "../stores/modal";
import { setDarkMode } from "../stores/theme";
import { setSelectedTask } from "../stores/task";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModeNightIcon from '@mui/icons-material/ModeNight';

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
          <button className="iconBtn" onClick={() => dispatch(setDarkMode(false))}>
            <Brightness7Icon />
          </button>
        ) : (
          <button className="iconBtn" onClick={() => dispatch(setDarkMode(true))}>
            <ModeNightIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
