import React, { useState } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'What is the future of marketing?' },
    { role: 'assistant', text: 'The future of marketing lies in hyper-personalisation and ethical AI-driven engagement.' },
  ]);

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col flex-grow bg-gray-50">
      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={\`max-w-xl px-4 py-3 rounded-xl shadow-sm \${msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}\`}
          >
            <p className="text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex gap-4">
        <input
          type="text"
          placeholder="Ask something..."
          className="flex-grow px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;