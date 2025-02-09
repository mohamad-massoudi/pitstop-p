import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaHome,
  FaShoppingCart,
  FaFileAlt,
  FaCalendarAlt,
  FaCog,
  FaChartBar,
} from "react-icons/fa"; // استفاده از آیکون‌های react-icons

const Playground = () => {
  const [collapsed, setCollapsed] = useState(true); // نوار کناری به طور پیش‌فرض بسته است
  const [rtl, setRtl] = useState(false);

  const menuItemStyles = {
    root: {
      fontSize: "14px", // افزایش اندازه فونت منو
      fontWeight: 400,
    },
    icon: {
      color: "black", // تغییر رنگ آیکون‌ها به مشکی
      fontSize: "1.25rem", // بزرگتر کردن اندازه آیکون‌ها
      marginRight: "10px", // افزایش فاصله بین آیکون و متن
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? "#fbfcfd" : "transparent",
    }),
    button: {
      "&:hover": {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      fontSize: "1.2rem", // بزرگتر کردن اندازه فونت برای عنوان
    }),
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        rootStyles={{
          position:"fixed",
          color: "#607489",
        }}
        backgroundColor="#ffffff"
        onMouseEnter={() => setCollapsed(false)} // وقتی موس وارد نوار کناری می‌شود
        onMouseLeave={() => setCollapsed(true)} // وقتی موس از نوار کناری خارج می‌شود
      >
        <div className="flex flex-col h-full">
          <div> {/* Placeholder for SidebarHeader */} </div>
          <div className="flex-1">
            <div className="px-6 mb-4 mt-8 flex justify-center ">
              <h2 className="font-medium opacity-90 text-lg">services</h2> {/* افزایش اندازه متن */}
            </div>
            <Menu menuItemStyles={menuItemStyles} className="flex flex-col">
              <SubMenu
                label="Charts"
                icon={<FaChartBar className="text-xl" />} // تغییر اندازه آیکون‌ها
                suffix={<div className="badge-danger text-base">6</div>} // افزایش اندازه متن در بخش badge
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
                style={{ marginBottom: "15px" }} // اضافه کردن فاصله بین SubMenu ها
              >
                <MenuItem className="text-lg">Product</MenuItem>
                <MenuItem className="text-lg">Orders</MenuItem>
                <MenuItem className="text-lg">Credit card</MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Playground;
