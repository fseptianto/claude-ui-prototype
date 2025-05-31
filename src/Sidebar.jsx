import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col p-4">
      <h2 className="text-2xl font-semibold mb-6">AccurmentGPT</h2>
      <nav className="flex flex-col gap-4 text-sm">
        <button className="text-left hover:text-blue-300">🧠 Problem Diagnosis</button>
        <button className="text-left hover:text-blue-300">📊 Insight Generator</button>
        <button className="text-left hover:text-blue-300">📝 Message Crafter</button>
        <button className="text-left hover:text-blue-300">⚙️ Settings</button>
      </nav>
    </div>
  );
}

export default Sidebar;