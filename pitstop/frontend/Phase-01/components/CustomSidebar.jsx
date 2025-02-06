"use client";

import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"; 
import { FaHome } from "react-icons/fa"; 
import { usePathname, useRouter } from "next/navigation";

const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); 

  const toggleSidebar = () => {
    setCollapsed(!collapsed); 
  };

  const isActive = (href) => pathname === href; 

  return (
    <div style={{ display: "flex", height: "100vh",}}>
      <Sidebar collapsed={collapsed}  >
        <Menu iconShape="square">
          <div>
            <button onClick={toggleSidebar}>
              {collapsed ? "→" : "←"}
            </button>
          </div>

          <MenuItem 
            icon={<FaHome />} 
            onClick={() => router.push("/home")}
            className={isActive("/home") ? "active" : ""}
          >
            Home
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
