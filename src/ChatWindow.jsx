import React, { useState } from 'react';

function ChatWindow() {
  const [selectedMode, setSelectedMode] = useState("The Strategist");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const modes = [
    {
      name: "The Strategist",
      description: "Solve complex problems"
    },
    {
      name: "The Diagnostician",
      description: "Uncover hidden barriers"
    },
    {
      name: "The Analyst",
      description: "Translate qualitative and quantitative data"
    },
    {
      name: "The Architect",
      description: "Design performance indicators"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center text-black bg-[#cbeafc] flex-grow p-10 font-lato">
      {/* Top Plan Banner */}
      <div className="text-center mb-3">
        <p className="text-sm text-black mb-2">
          Free plan • <a href="#" className="underline text-blue-700">Upgrade</a>
        </p>
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-10">
        <h1 className="text-4xl" style={{ fontFamily: 'TimesClassicDisplay', fontWeight: 700 }}>
          How can I support your marketing?
        </h1>
      </div>

      {/* Prompt Box */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-200">
        <input
          type="text"
          placeholder="Type your marketing challenge."
          className="w-full text-lg text-black placeholder-gray-500 outline-none font-lato"
        />

        <div className="flex justify-between items-center mt-4 relative">
          {/* Dropdown Menu */}
          <div
            className="relative text-sm text-black cursor-pointer select-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedMode} ▼

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 max-h-[144px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {modes.map((mode) => (
                  <div
                    key={mode.name}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedMode(mode.name);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className="font-medium text-black">{mode.name}</div>
                    <div className="text-sm text-gray-600">{mode.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Up Arrow Button */}
          <button className="bg-[#e37222] hover:bg-[#cf671e] text-white font-bold px-3 py-1 rounded-lg">
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;