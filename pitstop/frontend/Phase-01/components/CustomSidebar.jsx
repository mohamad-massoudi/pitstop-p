import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext"; // استفاده از ThemeContext برای دسترسی به تم
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaShoppingCart,
  FaWrench,
  FaGrinStars,
  FaCarAlt,
  FaShoppingBag,
  FaCogs,
  FaAddressCard,
} from "react-icons/fa"; // استفاده از آیکون‌های react-icons

const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(true); // نوار کناری به طور پیش‌فرض بسته است
  const { theme } = useTheme(); // گرفتن تم جاری از ThemeContext

  const menuItemStyles = {
    root: {
      fontSize: "14px", // افزایش اندازه فونت منو
      fontWeight: 400,
    },
    icon: {
      color: theme === "dark" ? "white" : "black", // رنگ آیکون‌ها در تم تاریک سفید و در تم روشن سیاه
      fontSize: "1.25rem",
      marginRight: "10px",
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: () => ({
      backgroundColor: theme === "dark" ? "#1a202c" : "#c5e4ff", // رنگ پس‌زمینه ساب منوها در تم تاریک
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
          <Menu
            menuItemStyles={menuItemStyles}
            className="flex flex-col "
            style={{
              backgroundColor: theme === "dark" ? "transparent" : "transparent",
            }}
          >
            <SubMenu
              label="Dashboard"
              icon={<FaAddressCard className="text-xl" />}
              style={{ marginBottom: "15px" }}
            >
              <MenuItem className="text-sm opacity-70">Pie charts</MenuItem>
              <MenuItem className="text-sm opacity-70">Line charts</MenuItem>
              <MenuItem className="text-sm opacity-70">Bar charts</MenuItem>
            </SubMenu>
            <SubMenu
              label="Book a Service"
              icon={<FaWrench className="text-xl" />}
              style={{ marginBottom: "15px" }}
            >
              <MenuItem className="text-sm opacity-70">Google maps</MenuItem>
              <MenuItem className="text-sm opacity-70">Open street maps</MenuItem>
            </SubMenu>
            <SubMenu
              label="Reviews & Ratings"
              icon={<FaGrinStars className="text-xl" />}
              style={{ marginBottom: "15px" }}
            >
              <MenuItem className="text-lg">Grid</MenuItem>
              <MenuItem className="text-lg">Layout</MenuItem>
            </SubMenu>
            <SubMenu
              label="Car Marketplace"
              icon={<FaCarAlt className="text-xl" />}
              style={{ marginBottom: "15px" }}
            >
              <MenuItem className="text-lg">Product</MenuItem>
              <MenuItem className="text-lg">Orders</MenuItem>
              <MenuItem className="text-lg">Credit card</MenuItem>
            </SubMenu>
            <SubMenu
              label="Car Parts Store"
              icon={<FaShoppingBag className="text-xl" />}
              style={{ marginBottom: "15px" }}
            >
              <MenuItem className="text-lg">Product</MenuItem>
              <MenuItem className="text-lg">Orders</MenuItem>
              <MenuItem className="text-lg">Credit card</MenuItem>
            </SubMenu>
            <SubMenu
              label="Payments & Invoices"
              icon={<FaShoppingCart className="text-xl" />}
              style={{ marginBottom: "15px" }}
            >
              <MenuItem className="text-lg">Product</MenuItem>
              <MenuItem className="text-lg">Orders</MenuItem>
              <MenuItem className="text-lg">Credit card</MenuItem>
            </SubMenu>

            {/* 🟢 ساب منوی تنظیمات در انتهای سایدبار */}
            <div className="align-bottom justify-end ">
              <SubMenu
                label="Settings"
                icon={<FaCogs className="text-xl" />}
                style={{ marginBottom: "15px" }}
              >
                <MenuItem className="text-lg">Product</MenuItem>
                <MenuItem className="text-lg">Orders</MenuItem>
                <MenuItem className="text-lg">Credit card</MenuItem>
              </SubMenu>
            </div>
            {/* 🔚 پایان بخش تنظیمات */}
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
