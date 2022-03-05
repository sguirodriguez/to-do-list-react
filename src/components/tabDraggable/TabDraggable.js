import "./TabDragglable.css";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TabStatus from "./TabStatus";

const TabDraggable = ({ listSelected, setCountTasksFinalized }) => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [option, setOption] = useState("");
  const [statusTask, setStatusTask] = useState([
    { label: "Pendente", value: 0 },
    { label: "Em Desenvolvimento", value: 1 },
    { label: "Concluída", value: 2 },
  ]);
  const changeIsModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };
  const addTask = (task) => {
    setTasks(task);
  };
  return (
    <div className="mainGrid">
      <TabStatus
        changeIsModalVisible={changeIsModalVisible}
        setOption={setOption}
        tasks={tasks}
        addTask={addTask}
        statusTask={statusTask}
        setTasks={setTasks}
        listSelected={listSelected}
        setCountTasksFinalized={setCountTasksFinalized}
      />

      {isModalVisible && (
        <AddTaskModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          tasks={tasks}
          setTasks={addTask}
          option={option}
          listSelected={listSelected}
        />
      )}
    </div>
  );
};

export default TabDraggable;
