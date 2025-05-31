import React, { useState } from 'react';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`h-full flex flex-col justify-between border-r border-gray-200 bg-[#2b3440] text-white ${collapsed ? 'w-20 p-4' : 'w-64 p-6'} transition-all duration-300 font-lato`}>
      {/* Top Section */}
      <div>
        <button onClick={toggleSidebar} className="mb-8 text-xl font-semibold hover:text-white">
          {collapsed ? '☰' : (<span className="font-bold" style={{ fontFamily: 'TimesClassicDisplay' }}>☰ Accurment</span>)}
        </button>
        <nav className="flex flex-col gap-6 text-[15px]">
          <button className="text-left hover:text-gray-200">
            🧭 {!collapsed && 'Strategy Builder'}
          </button>
          <button className="text-left hover:text-gray-200">
            📁 {!collapsed && 'Strategy History'}
          </button>
          <div className="my-2"></div>
          <button className="text-left hover:text-gray-200">
            💬 {!collapsed && 'Accurment GPT'}
          </button>
          <button className="text-left hover:text-gray-200">
            🗂 {!collapsed && 'Chat History'}
          </button>
        </nav>
      </div>

      {/* Bottom User Dropdown */}
      <div className="relative mt-6">
        <div
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className="cursor-pointer border-t border-gray-600 pt-4 text-sm hover:text-gray-200"
        >
          {collapsed ? 'F' : 'Felix • Free plan ▼'}
        </div>

        {!collapsed && isUserDropdownOpen && (
          <div className="absolute bottom-12 left-0 w-full bg-white text-gray-900 border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="text-sm">
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Get help</li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-red-600">Log out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;