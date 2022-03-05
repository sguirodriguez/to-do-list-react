import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Input } from "antd";
import { message } from "antd";

export default function AddTaskModal({
  setIsModalVisible,
  isModalVisible,
  tasks,
  setTasks,
  option,
  listSelected,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (name, description, option) => {
    if (!name) {
      return message.error("Você deve inserir um nome!");
    }
    if (!description) {
      return message.error("Você deve inserir uma descrição!");
    }
    let newTask = {
      id: uuidv4(),
      name: name,
      description: description,
      timeline: option,
      listSelected,
    };
    setTasks([...tasks, newTask]);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Modal
      title="Adicionar Tarefa"
      visible={isModalVisible}
      onOk={() => {
        handleSubmit(name, description, option);
      }}
      onCancel={() => setIsModalVisible(false)}
      cancelText="Cancelar"
      okText="Adicionar"
    >
      <div className="container-modal">
        <Input
          placeholder="Nome da Tarefa"
          onChange={(item) => setName(item.target.value)}
          className="input"
          value={name}
        />
        <Input
          placeholder="Descrição"
          onChange={(item) => setDescription(item.target.value)}
          className="input"
          value={description}
        />
      </div>
    </Modal>
  );
}
