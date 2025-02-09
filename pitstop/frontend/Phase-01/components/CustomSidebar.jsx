import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext"; // استفاده از ThemeContext برای دسترسی به تم
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaHome,
  FaShoppingCart,
  FaFileAlt,
  FaCalendarAlt,
  FaCog,
  FaChartBar,
  FaBars, // آیکون همبرگر
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
      fontSize: "1.25rem", // بزرگتر کردن اندازه آیکون‌ها
      marginRight: "10px", // افزایش فاصله بین آیکون و متن
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: theme === "dark" ? "#1a202c" : "#c5e4ff", // رنگ پس‌زمینه ساب منوها در تم تاریک
    }),
    button: {
      "&:hover": {
        backgroundColor: theme === "dark" ? "#1a202c" : "#c5e4ff", // رنگ پس‌زمینه ساب منو در هاور
        color: theme === "dark" ? "white" : "#44596e", // رنگ متن در هاور
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      fontSize: "1.2rem", // بزرگتر کردن اندازه فونت برای عنوان
      color: theme === "dark" ? "white" : "black", // رنگ متن در تم تاریک سفید و در تم روشن سیاه
    }),
  };

  return (
    <Sidebar
      collapsed={collapsed}
      breakPoint="md"
      rootStyles={{
        position: "fixed",
        color: theme === "dark" ? "white" : "#607489", // رنگ متن در تم تاریک سفید و در تم روشن خاکی
        backgroundColor: theme === "dark" ? "gray-900" : "white", // پس‌زمینه در تم تاریک خاکی و در تم روشن سفید
        height: "100vh",
        borderRight: theme === "dark" ? "none" : "1px solid white", // حذف بوردر سمت راست در تم دارک
      }}
      onMouseEnter={() => setCollapsed(false)} // وقتی موس وارد نوار کناری می‌شود
      onMouseLeave={() => setCollapsed(true)} // وقتی موس از نوار کناری خارج می‌شود
    >
      <div className="flex flex-col h-full dark:bg-gray-900">
        <div> {/* Placeholder for SidebarHeader */} </div>
        <div className="flex-1">
          <div className="px-6 mb-4 mt-8 flex justify-center ">
            <h2 className="font-medium opacity-90 text-lg">services</h2> {/* افزایش اندازه متن */}
          </div>
          <Menu menuItemStyles={menuItemStyles} className="flex flex-col" style={{
            backgroundColor: theme === "dark" ? "transparent" : "transparent", // پس‌زمینه منو در تم تاریک
          }}>
            <SubMenu
              label="Charts"
              icon={<FaChartBar className="text-xl" />} // تغییر اندازه آیکون‌ها
              suffix={<div className="badge-danger text-base"></div>} // افزایش اندازه متن در بخش badge
              style={{ marginBottom: "15px" }} // اضافه کردن فاصله بین SubMenu ها
            >
              <MenuItem className="text-sm opacity-70">Pie charts</MenuItem> {/* کاهش اندازه و opacity برای متن */}
              <MenuItem className="text-sm opacity-70">Line charts</MenuItem>
              <MenuItem className="text-sm opacity-70">Bar charts</MenuItem>
            </SubMenu>
            <SubMenu
              label="Maps"
              icon={<FaCog className="text-xl" />}
              style={{ marginBottom: "15px" }} // اضافه کردن فاصله بین SubMenu ها
            >
              <MenuItem className="text-sm opacity-70">Google maps</MenuItem> {/* کاهش اندازه و opacity برای متن */}
              <MenuItem className="text-sm opacity-70">Open street maps</MenuItem>
            </SubMenu>
            <SubMenu
              label="Components"
              icon={<FaHome className="text-xl" />}
              style={{ marginBottom: "15px" }} // اضافه کردن فاصله بین SubMenu ها
            >
              <MenuItem className="text-lg">Grid</MenuItem>
              <MenuItem className="text-lg">Layout</MenuItem>
            </SubMenu>
            <SubMenu
              label="E-commerce"
              icon={<FaShoppingCart className="text-xl" />}
              style={{ marginBottom: "15px"  }} // اضافه کردن فاصله بین SubMenu ها
            >
              <MenuItem className="text-lg">Product</MenuItem>
              <MenuItem className="text-lg">Orders</MenuItem>
              <MenuItem className="text-lg">Credit card</MenuItem>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
