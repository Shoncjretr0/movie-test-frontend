import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("You have been logged out.");
  };

  return (
    <Layout>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Menu theme="dark" mode="horizontal" style={{ flex: 1 }}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/favorites">Favorites</Link>
            </Menu.Item>
          </Menu>
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Home;