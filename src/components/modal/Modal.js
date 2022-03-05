import React from "react";
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Select, Modal } from "antd";

const modal = ({
  isModalVisible,
  handleConfirm,
  handleCancel,
  nameForOption,
  setNameForOption,
  handleChangeSelect,
}) => {
  const { Option } = Select;
  return (
    <Modal
      title="Adicionar Lista"
      visible={isModalVisible}
      onOk={handleConfirm}
      onCancel={handleCancel}
      cancelText="Cancelar"
      okText="Adicionar"
    >
      <div className="container-modal">
        <Input
          placeholder="Nome da Lista"
          onChange={(item) => setNameForOption(item.target.value)}
          className="input"
          value={nameForOption}
        />
        <Select
          placeholder="Ícone"
          style={{ width: 120 }}
          onChange={handleChangeSelect}
          className="select-icon"
        >
          <Option value="pieChart">
            <PieChartOutlined />
          </Option>
          <Option value="user">
            <UserOutlined />
          </Option>
          <Option value="file">
            <FileOutlined />
          </Option>
        </Select>
      </div>
    </Modal>
  );
};

export default modal;
