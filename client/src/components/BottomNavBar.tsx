import React from "react";
import {
  Home as HomeIcon,
  MessageCircle,
  User,
  Users,
  Bot,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";

// Updated with beautiful peach colors - Cache bust 2024-07-18

const iconSize = 18; // Base size for mobile, will be responsive

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), icon: HomeIcon, path: "/" },
    {
      label: t("nav.chat"),
      icon: MessageCircle,
      path: "/chat",
    },
    { label: "AI Chat", icon: Bot, path: "/ai-chatbot" },
    {
      label: t("nav.friends"),
      icon: Users,
      path: "/friends",
    },
    {
      label: t("nav.profile"),
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <nav
      style={{
        background: "linear-gradient(to right, #fef9f0, #fffbf0, #fef7f7)",
        borderTop: "3px solid #f5b1b1",
        borderRadius: "24px 24px 0 0",
        boxShadow: "0 15px 35px -12px rgba(245, 177, 177, 0.3)",
      }}
      className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md flex justify-around items-center h-16 sm:h-18 lg:h-20 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto"
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            className={`relative flex flex-col items-center justify-center flex-1 py-2 sm:py-3 px-2 focus:outline-none transition-all duration-300 transform ${
              isActive ? "scale-110 sm:scale-115" : "hover:scale-105"
            }`}
            onClick={() => navigate(item.path)}
          >
            {/* Active background glow */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-br from-peach-300/30 via-coral-200/20 to-blush-300/30 rounded-2xl blur-sm" />
            )}

            {/* Icon container with beautiful styling */}
            <div
              className={`relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-br from-peach-400 via-coral-300 to-blush-400 shadow-lg shadow-peach-300/50"
                  : "bg-gradient-to-br from-cream-100/80 to-peach-100/60 hover:from-peach-200/80 hover:to-coral-200/60"
              }`}
            >
              <IconComponent
                size={18}
                style={{
                  color: isActive ? "#fffcf0" : "#ff7a2b",
                  filter: "drop-shadow(0 1px 2px rgba(255, 122, 43, 0.3))",
                }}
                className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-300"
              />
            </div>

            {/* Label with beautiful styling */}
            <span
              style={{
                color: isActive ? "#e55a1b" : "#ff9a56",
                textShadow: "0 1px 2px rgba(255, 154, 86, 0.3)",
              }}
              className="text-[10px] sm:text-xs lg:text-sm font-semibold leading-none mt-1 transition-colors duration-300"
            >
              {item.label}
            </span>

            {/* Active indicator dot */}
            {isActive && (
              <div className="absolute -top-1 right-1/2 transform translate-x-1/2 w-2 h-2 bg-gradient-to-r from-coral-400 to-blush-400 rounded-full shadow-sm animate-pulse" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
