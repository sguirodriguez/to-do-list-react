import React, { useState } from "react";
import HomeScreen from "./Home.screen";
import { message } from "antd";

const HomeController = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [optionsMenu, setOptionsMenu] = useState([
    { label: "Trabalho", icon: "pieChart", key: "1" },
    { label: "Pessoal", icon: "user", key: "2" },
  ]);
  const [listSelected, setListSelected] = useState("");
  const [nameForOption, setNameForOption] = useState("");
  const [iconForOption, setIconForOption] = useState("");
  const [countTasksFinalized, setCountTasksFinalized] = useState(0);

  const showModal = () => {
    setNameForOption("");
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    if (!nameForOption) {
      return message.error("Você deve inserir um nome!");
    }
    if (!iconForOption) {
      return message.error("Você deve escolher um ícone!");
    }
    const lastItemArray = optionsMenu[optionsMenu.length - 1];

    setOptionsMenu([
      ...optionsMenu,
      {
        label: nameForOption,
        icon: iconForOption,
        key: lastItemArray?.key + 1,
      },
    ]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRemoveOption = (option) => {
    let newArray = optionsMenu.filter((item) => item.key !== option?.key);
    setOptionsMenu(newArray);
  };

  const handleChangeSelect = (value) => {
    setIconForOption(value);
  };
  const handlers = {
    collapsed,
    setCollapsed,
    optionsMenu,
    showModal,
    handleConfirm,
    handleCancel,
    isModalVisible,
    nameForOption,
    setNameForOption,
    handleChangeSelect,
    handleRemoveOption,
    setListSelected,
    listSelected,
    countTasksFinalized,
    setCountTasksFinalized,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
