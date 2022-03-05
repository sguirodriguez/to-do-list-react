import React from "react";
import Card from "./Card";
import { FiPlusCircle } from "react-icons/fi";

const TabStatus = ({
  changeIsModalVisible,
  setOption,
  tasks,
  addTask,
  statusTask,
  setTasks,
  listSelected,
  setCountTasksFinalized,
}) => {
  return (
    <>
      {statusTask?.map((item) => {
        const option = {
          label: item?.label,
          value: item?.value,
        };
        return (
          <div className="column">
            <div className="container-topics">
              <text className="title-topic">{option?.label}</text>
              <button
                onClick={() => {
                  changeIsModalVisible();
                  setOption(option?.value);
                }}
                className="addButton"
              >
                <FiPlusCircle size={15} />
              </button>
            </div>
            {tasks
              .filter(
                (item) =>
                  item.timeline === option?.value &&
                  item.listSelected === listSelected
              )
              .map((e) => (
                <Card
                  currentTask={e}
                  tasks={tasks}
                  addTask={addTask}
                  setTasks={setTasks}
                  setCountTasksFinalized={setCountTasksFinalized}
                />
              ))}
          </div>
        );
      })}
    </>
  );
};

export default TabStatus;
