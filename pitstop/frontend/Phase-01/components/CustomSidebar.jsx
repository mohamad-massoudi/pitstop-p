import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaShoppingCart,
  FaWrench,
  FaGrinStars,
  FaCarAlt,
  FaShoppingBag,
  FaCogs,
  FaAddressCard,
} from "react-icons/fa";

const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null); // مدیریت باز بودن فقط یک ساب منو
  const { theme } = useTheme();

  const handleSubMenuClick = (menuName) => {
    setOpenSubMenu((prev) => (prev === menuName ? null : menuName));
  };

  const menuItemStyles = {
    root: { fontSize: "14px", fontWeight: 400 },
    icon: {
      color: theme === "dark" ? "white" : "black",
      fontSize: "1.25rem",
      marginRight: "10px",
    },
    SubMenuExpandIcon: { color: "#b6b7b9" },
    subMenuContent: () => ({
      backgroundColor: theme === "dark" ? "#1a202c" : "#c5e4ff",
    }),
    button: {
      "&:hover": {
        backgroundColor: theme === "dark" ? "#1a202c" : "#c5e4ff",
        color: theme === "dark" ? "white" : "#44596e",
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      fontSize: "1.2rem",
      color: theme === "dark" ? "white" : "black",
    }),
  };

  return (
    <Sidebar
      collapsed={collapsed}
      breakPoint="md"
      rootStyles={{
        position: "fixed",
        color: theme === "dark" ? "white" : "#607489",
        backgroundColor: theme === "dark" ? "#1a202c" : "white",
        height: "100vh",
        borderRight: theme === "dark" ? "none" : "1px solid white",
      }}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className="flex flex-col h-full dark:bg-gray-900">
        <div className="px-6 mb-4 mt-8 flex justify-center">
          <h2 className="font-medium opacity-90 text-lg">Pitstop</h2>
        </div>
        <div className="flex-1">
          <Menu menuItemStyles={menuItemStyles} className="flex flex-col pt-6">
            <SubMenu
              label="Dashboard"
              icon={<FaAddressCard className="text-xl" />}
              open={openSubMenu === "dashboard"}
              onClick={() => handleSubMenuClick("dashboard")}
              className="mb-5"
            >
              <MenuItem>Pie charts</MenuItem>
              <MenuItem>Line charts</MenuItem>
              <MenuItem>Bar charts</MenuItem>
            </SubMenu>

            <SubMenu
              label="Book a Service"
              icon={<FaWrench className="text-xl" />}
              open={openSubMenu === "bookService"}
              onClick={() => handleSubMenuClick("bookService")}
              className="mb-5"
            >
              <MenuItem>Google maps</MenuItem>
              <MenuItem>Open street maps</MenuItem>
            </SubMenu>

            <SubMenu
              label="Reviews & Ratings"
              icon={<FaGrinStars className="text-xl" />}
              open={openSubMenu === "reviews"}
              onClick={() => handleSubMenuClick("reviews")}
              className="mb-5"
            >
              <MenuItem>Grid</MenuItem>
              <MenuItem>Layout</MenuItem>
            </SubMenu>

            <SubMenu
              label="Car Marketplace"
              icon={<FaCarAlt className="text-xl" />}
              open={openSubMenu === "marketplace"}
              onClick={() => handleSubMenuClick("marketplace")}
              className="mb-5"
            >
              <MenuItem>Product</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>Credit card</MenuItem>
            </SubMenu>

            <SubMenu
              label="Car Parts Store"
              icon={<FaShoppingBag className="text-xl" />}
              open={openSubMenu === "partsStore"}
              onClick={() => handleSubMenuClick("partsStore")}
              className="mb-5"
            >
              <MenuItem>Product</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>Credit card</MenuItem>
            </SubMenu>

            <SubMenu
              label="Payments & Invoices"
              icon={<FaShoppingCart className="text-xl" />}
              open={openSubMenu === "payments"}
              onClick={() => handleSubMenuClick("payments")}
              className="mb-5"
            >
              <MenuItem>Product</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>Credit card</MenuItem>
            </SubMenu>

            <div className="align-bottom justify-end">
              <SubMenu
                label="Settings"
                icon={<FaCogs className="text-xl" />}
                open={openSubMenu === "settings"}
                onClick={() => handleSubMenuClick("settings")}
                className="mb-5"
              >
                <MenuItem>Product</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuItem>Credit card</MenuItem>
              </SubMenu>
            </div>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
