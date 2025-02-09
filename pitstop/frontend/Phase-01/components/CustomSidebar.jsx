"use client";

import { useState } from "react";
import { Sidebar } from "react-pro-sidebar";  // فقط Sidebar رو وارد می‌کنیم چون منویی نداریم
import { FaBars } from "react-icons/fa"; // آیکون دکمه باز و بسته کردن

const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);  // وضعیت باز یا بسته بودن نوار کناری

  const toggleSidebar = () => {
    setCollapsed(!collapsed);  // تغییر وضعیت باز و بسته
  };

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      <Sidebar collapsed={collapsed} style={{ height: "100vh", position: "absolute" }}>
        <div>
          <button
            onClick={toggleSidebar}  // روی دکمه کلیک می‌کنیم تا نوار کناری باز یا بسته بشه
            style={{
              position: "absolute", // دکمه رو در گوشه بالا قرار می‌دهیم
              top: 10,
              left: 10,
              padding: "10px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            <FaBars /> {/* آیکون سه خطی برای باز و بسته کردن نوار */}
          </button>
        </div>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
