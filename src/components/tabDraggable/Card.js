import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FiXCircle, FiCheckCircle } from "react-icons/fi";
import { message } from "antd";

export default function Card({
  currentTask,
  tasks,
  addTask,
  setTasks,
  setCountTasksFinalized,
}) {
  const [onDragCard, setOnDragCard] = useState(false);
  const nodeRef = useRef(null);

  const validateColumn = ({ timeline, newColumn }) => {
    if (timeline >= 2 && newColumn) {
      return 2;
    }
    if (timeline === 0 && !newColumn) {
      return 0;
    }
    return !newColumn ? timeline - 1 : timeline + 1;
  };

  const processing = async ({ tasks, newColumn }) => {
    let newArray = [];
    newArray = tasks?.map((item) => {
      if (item?.id === currentTask?.id) {
        const alterItem = {
          ...item,
          timeline: validateColumn({ timeline: item?.timeline, newColumn }),
        };
        return alterItem;
      }
      return item;
    });
    setOnDragCard(false);
    setTasks([""]);
    return await setTasks(newArray);
  };

  const handleEvent = async (event, data) => {
    if (event.type === "mousemove" || event.type === "touchmove") {
      setOnDragCard(true);
    }
    if (event.type === "mouseup" || event.type === "touchend") {
      if (data?.lastX > 50) {
        return processing({ tasks, newColumn: true });
      }
      if (data?.lastX < -50) {
        return processing({ tasks, newColumn: false });
      }
      setOnDragCard(false);
      setTasks([""]);
      setTasks([...tasks]);
    }
  };

  return (
    <div className={!onDragCard ? "container-draggable" : null}>
      <Draggable
        onDrag={handleEvent}
        onStart={handleEvent}
        onStop={handleEvent}
        onMouseDown={handleEvent}
        onMouseUp={handleEvent}
        onTouchStart={handleEvent}
        onTouchEnd={handleEvent}
        nodeRef={nodeRef}
      >
        <div
          className={onDragCard ? "cardSelected" : "card"}
          key={currentTask?.id}
          ref={nodeRef}
        >
          <div className="container-title-and-description">
            <h4>{currentTask?.name && currentTask?.name}</h4>
            <p>{currentTask?.description}</p>
          </div>
          {onDragCard && (
            <button className="button-remove-task">
              <FiXCircle size={15} />
            </button>
          )}
        </div>
      </Draggable>
      {!onDragCard && (
        <button
          onClick={() => {
            let newTaskList = tasks?.filter((item) => {
              if (item?.id != currentTask?.id) {
                return item;
              }
            });
            addTask(newTaskList);
            if (currentTask.timeline === 2) {
              message.success("Tarefa Finalizada!");
              return setCountTasksFinalized((item) => item + 1);
            }
          }}
          className="button-remove-task"
        >
          {currentTask.timeline === 2 ? (
            <FiCheckCircle size={15} color={"green"} />
          ) : (
            <FiXCircle size={15} />
          )}
        </button>
      )}
    </div>
  );
}
