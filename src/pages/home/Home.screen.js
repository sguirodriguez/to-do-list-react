import React from "react";
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./Home.css";
import { FiPlusCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import Modal from "../../components/modal/Modal";
import TabDraggable from "../../components/tabDraggable/TabDraggable";

const HomeScreen = ({ handlers }) => {
  const {
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
  } = handlers;
  const { Header, Content, Sider } = Layout;

  const translatorIcons = {
    pieChart: <PieChartOutlined />,
    user: <UserOutlined />,
    file: <FileOutlined />,
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="container-logo">
          <img src="https://i.imgur.com/EciX8Ae.png" className="logo" />
          {collapsed == false && (
            <text className="title">Lista de Tarefas</text>
          )}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onSelect={(item) => setListSelected(item.key)}
        >
          {optionsMenu?.map((item) => {
            const option = {
              label: item?.label,
              icon: item?.icon,
              key: item?.key,
            };
            return (
              <Menu.Item key={option?.key} icon={translatorIcons[option?.icon]}>
                <div className="container-option">
                  {option?.label}
                  {collapsed == false && (
                    <button
                      onClick={() => handleRemoveOption(option)}
                      className="remove-option"
                    >
                      <FiXCircle />
                    </button>
                  )}
                </div>
              </Menu.Item>
            );
          })}

          <button
            className="container-logo-add-option"
            onClick={() => showModal()}
          >
            <div className="logo-add-option">
              <FiPlusCircle size={18} />
            </div>
          </button>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
          children={
            <div
              style={{
                width: "100%",
                // backgroundColor: "#002140",
                paddingLeft: "10px",
              }}
            >
              <text style={{ color: "white" }}>Tarefas Finalizadas: </text>
              <text style={{ color: "#00ba10" }}>{countTasksFinalized}</text>
            </div>
          }
        />
        <Content style={{ margin: "0 16px" }}>
          <TabDraggable
            listSelected={Number(listSelected)}
            setCountTasksFinalized={setCountTasksFinalized}
          />
        </Content>
      </Layout>
      <Modal
        isModalVisible={isModalVisible}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        nameForOption={nameForOption}
        setNameForOption={setNameForOption}
        handleChangeSelect={handleChangeSelect}
      />
    </Layout>
  );
};

export default HomeScreen;
