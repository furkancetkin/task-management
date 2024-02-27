import Status from "./components/Status";
import { useState } from "react";
import Board from "./components/Board";
import initialData from "./initialData";
import Navbar from "./components/Navbar";
import FormModal from "./components/modals/FormModal";
import DetailModal from "./components/modals/DetailModal";

function App() {
  const [taskList, setTaskList] = useState(initialData);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [detailModal, setDetailModal] = useState(false);
  const [formModal, setFormModal] = useState({
    isOpen: false,
    type: 'create'
  });
  
  return (
    <div className={darkMode ? 'darkMode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setFormModal={setFormModal} setSelectedTask={setSelectedTask} />
      <div className="container">
        <Status taskList={taskList} />
        <Board taskList={taskList} setTaskList={setTaskList} setFormModal={setFormModal} setDetailModal={setDetailModal} setSelectedTask={setSelectedTask} />
      </div>
        <FormModal formModal={formModal} setFormModal={setFormModal} selectedTask={selectedTask} taskList={taskList} setTaskList={setTaskList} />
        <DetailModal detailModal={detailModal} setDetailModal={setDetailModal} task={selectedTask} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
export default App;
