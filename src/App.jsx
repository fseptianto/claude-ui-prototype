import React from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;