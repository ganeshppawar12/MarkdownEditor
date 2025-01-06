import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to the Markdown Editor!

Type your markdown content here and see the live preview on the right.`);

  // Function to export the markdown content as a README.md file
  const downloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full bg-blue-500 text-white text-center p-4 text-2xl font-bold">
        Markdown Editor
      </header>

      <main className="flex-grow flex flex-col lg:flex-row p-4 gap-4">
        {/* Markdown Editor */}
        <div className="flex flex-col w-full lg:w-1/2 bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Markdown Input</h2>
          <textarea
            className="flex-grow w-full h-96 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        {/* Live Preview */}
        <div className="flex flex-col w-full lg:w-1/2 bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
          <div
            className="prose w-full max-w-none p-2 border rounded overflow-auto"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </main>

      <footer className="flex justify-center gap-4 bg-blue-500 text-white p-4">
        <button
          onClick={downloadReadme}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Download as README.md
        </button>
      </footer>
    </div>
  );
};

export default App;
