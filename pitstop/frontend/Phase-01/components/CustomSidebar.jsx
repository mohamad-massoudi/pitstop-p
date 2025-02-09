import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome, FaShoppingCart, FaFileAlt, FaCalendarAlt, FaCog, FaChartBar } from 'react-icons/fa'; // استفاده از آیکون‌های react-icons

const Playground = () => {
  const [collapsed, setCollapsed] = useState(true); // نوار کناری به طور پیش‌فرض بسته است
  const [rtl, setRtl] = useState(false);

  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: '#0098e5',
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? '#fbfcfd' : 'transparent',
    }),
    button: {
      '&:hover': {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        rtl={rtl}
        rootStyles={{
          color: '#607489',
        }}
        backgroundColor="#ffffff"
        onMouseEnter={() => setCollapsed(false)} // وقتی موس وارد نوار کناری می‌شود
        onMouseLeave={() => setCollapsed(true)}  // وقتی موس از نوار کناری خارج می‌شود
      >
        <div className="flex flex-col h-full">
          <div className="my-4"> {/* Placeholder for SidebarHeader */} </div>
          <div className="flex-1 mb-8">
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu label="Charts" icon={<FaChartBar />} suffix={<div className="badge-danger">6</div>}>
                <MenuItem>Pie charts</MenuItem>
                <MenuItem>Line charts</MenuItem>
                <MenuItem>Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Maps" icon={<FaCog />}>
                <MenuItem>Google maps</MenuItem>
                <MenuItem>Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Components" icon={<FaHome />}>
                <MenuItem>Grid</MenuItem>
                <MenuItem>Layout</MenuItem>
              </SubMenu>
              <SubMenu label="E-commerce" icon={<FaShoppingCart />}>
                <MenuItem>Product</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuItem>Credit card</MenuItem>
              </SubMenu>
            </Menu>

            <div className="px-6 mb-2 mt-8">
              <h2 className="font-semibold opacity-70">Extra</h2>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<FaCalendarAlt />} suffix={<div className="badge-success">New</div>}>
                Calendar
              </MenuItem>
              <MenuItem icon={<FaFileAlt />}>Documentation</MenuItem>
              <MenuItem disabled icon={<FaCog />}>
                Examples
              </MenuItem>
            </Menu>
          </div>
          <div className="my-4"> {/* Placeholder for SidebarFooter */} </div>
        </div>
      </Sidebar>

      {/* حذف محتویات وسط صفحه */}
      <main className="hidden"></main>
    </div>
  );
};

export default Playground;
