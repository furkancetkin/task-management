import Status from "./components/Status";
import Board from "./components/Board";
import Navbar from "./components/Navbar";
import FormModal from "./components/modals/FormModal";
import DetailModal from "./components/modals/DetailModal";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "darkMode" : ""}>
      <Navbar />
      <div className="container">
        <Status />
        <Board />
      </div>
      <FormModal />
      <DetailModal />
    </div>
  );
}
export default App;
