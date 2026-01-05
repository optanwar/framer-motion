import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Menu,
  ChevronLeft,
} from "lucide-react";
import React, { useState } from "react";

/* ---------------- SIDEBAR DATA ---------------- */
const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Users", icon: Users },
  { name: "Orders", icon: ShoppingCart },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

const sidebarVariants = {
  open: {
    width: 240,
    transition: { type: "spring", stiffness: 160, damping: 22 },
  },
  closed: {
    width: 72,
    transition: { type: "spring", stiffness: 160, damping: 22 },
  },
};

const DashboardMainPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="h-screen w-full flex bg-neutral-950 text-white">
      {/* ---------------- SIDEBAR ---------------- */}
      <motion.aside
        variants={sidebarVariants}
        animate={open ? "open" : "closed"}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-full bg-neutral-900 border-r border-white/10 flex flex-col"
      >
        {/* LOGO + TOGGLE */}
        <div className="h-16 flex items-center justify-between px-4">
          <AnimatePresence>
            {open && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-semibold text-sm"
              >
                MyDashboard
              </motion.span>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="p-1 rounded-md hover:bg-white/10 transition"
          >
            {open ? <ChevronLeft size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex-1 mt-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <motion.button
                key={item.name}
                whileHover={{ x: open ? 6 : 0 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActive(item.name)}
                className={`relative w-full flex items-center gap-3 px-4 py-2 text-sm
                transition-colors
                ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute left-0 h-full w-1 bg-cyan-400 rounded-r"
                  />
                )}

                <Icon size={18} />

                {/* TEXT */}
                <AnimatePresence>
                  {open && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>
      </motion.aside>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-xl font-semibold">Dashboard Overview</h1>
          <p className="text-sm text-neutral-400">
            Welcome back, here’s what’s happening today.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Revenue", "Users", "Orders"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-white/10 rounded-xl p-4"
            >
              <h3 className="text-sm text-neutral-400">{item}</h3>
              <p className="text-2xl font-semibold mt-2">₹24,000</p>
            </motion.div>
          ))}
        </div>

        {/* ACTIVITY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 bg-neutral-900 border border-white/10 rounded-xl p-4"
        >
          <h2 className="text-sm font-medium mb-4">Recent Activity</h2>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>🟢 New user registered</li>
            <li>🟢 Order #1234 completed</li>
            <li>🟡 Server performance normal</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardMainPage;
