"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
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
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const { theme } = useTheme();
  const { t, i18n } = useTranslation(); // دریافت ترجمه‌ها و زبان جاری

  const isRTL = i18n.language === "fa" || i18n.language === "ar"; // بررسی زبان راستچین

  const handleSubMenuClick = (menuName) => {
    setOpenSubMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleMouseEnter = () => {
    // تنظیم تاخیر 0.5 ثانیه برای باز شدن سایدبار
    const timeout = setTimeout(() => {
      setCollapsed(false);
    }, 500);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    // اگر موس زودتر خارج شد، تاخیر لغو شود
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setCollapsed(true);
  };

  const menuItemStyles = {
    root: { fontSize: "14px", fontWeight: 400 },
    icon: {
      color: theme === "dark" ? "white" : "black",
      fontSize: "1.25rem",
      marginRight: "10px",
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
      transform: isRTL ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    },
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
      collapsedWidth="80px" // پهنا در حالت بسته
      width="280px" // پهنا در حالت باز
      rootStyles={{
        position: "fixed",
        color: theme === "dark" ? "white" : "#607489",
        backgroundColor: theme === "dark" ? "#1a202c" : "white",
        height: "100vh",
        borderRight: theme === "dark" ? "none" : "1px solid white",
        direction: isRTL ? "rtl" : "ltr",
        transition: "width 2s linier", // 🔹 کند شدن باز و بسته شدن
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col h-full dark:bg-gray-900">
        <div className="px-6 mb-4 mt-8 flex justify-center">
          <h2 className="font-medium opacity-90 text-lg">Pitstop</h2>
        </div>
        <div className="flex-1">
          <Menu menuItemStyles={menuItemStyles} className="flex flex-col pt-6">
            <SubMenu
              label={t("dashboard")}
              icon={<FaAddressCard className="text-xl" />}
              open={openSubMenu === "dashboard"}
              onClick={() => handleSubMenuClick("dashboard")}
              className="mb-5"
            >
              <MenuItem>{t("pie_charts")}</MenuItem>
              <MenuItem>{t("line_charts")}</MenuItem>
              <MenuItem>{t("bar_charts")}</MenuItem>
            </SubMenu>

            <SubMenu
              label={t("book_service")}
              icon={<FaWrench className="text-xl" />}
              open={openSubMenu === "bookService"}
              onClick={() => handleSubMenuClick("bookService")}
              className="mb-5"
            >
              <MenuItem>{t("google_maps")}</MenuItem>
              <MenuItem>{t("open_street_maps")}</MenuItem>
            </SubMenu>

            <SubMenu
              label={t("reviews_ratings")}
              icon={<FaGrinStars className="text-xl" />}
              open={openSubMenu === "reviews"}
              onClick={() => handleSubMenuClick("reviews")}
              className="mb-5"
            >
              <MenuItem>{t("grid")}</MenuItem>
              <MenuItem>{t("layout")}</MenuItem>
            </SubMenu>

            <SubMenu
              label={t("car_marketplace")}
              icon={<FaCarAlt className="text-xl" />}
              open={openSubMenu === "marketplace"}
              onClick={() => handleSubMenuClick("marketplace")}
              className="mb-5"
            >
              <MenuItem>{t("product")}</MenuItem>
              <MenuItem>{t("orders")}</MenuItem>
              <MenuItem>{t("credit_card")}</MenuItem>
            </SubMenu>

            <SubMenu
              label={t("car_parts_store")}
              icon={<FaShoppingBag className="text-xl" />}
              open={openSubMenu === "partsStore"}
              onClick={() => handleSubMenuClick("partsStore")}
              className="mb-5"
            >
              <MenuItem>{t("product")}</MenuItem>
              <MenuItem>{t("orders")}</MenuItem>
              <MenuItem>{t("credit_card")}</MenuItem>
            </SubMenu>

            <SubMenu
              label={t("payments_invoices")}
              icon={<FaShoppingCart className="text-xl" />}
              open={openSubMenu === "payments"}
              onClick={() => handleSubMenuClick("payments")}
              className="mb-5"
            >
              <MenuItem>{t("product")}</MenuItem>
              <MenuItem>{t("orders")}</MenuItem>
              <MenuItem>{t("credit_card")}</MenuItem>
            </SubMenu>

            <div className="align-bottom justify-end">
              <SubMenu
                label={t("settings")}
                icon={<FaCogs className="text-xl" />}
                open={openSubMenu === "settings"}
                onClick={() => handleSubMenuClick("settings")}
                className="mb-5"
              >
                <MenuItem>{t("product")}</MenuItem>
                <MenuItem>{t("orders")}</MenuItem>
                <MenuItem>{t("credit_card")}</MenuItem>
              </SubMenu>
            </div>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
